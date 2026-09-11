
// Lấy dữ liệu giỏ hàng từ localStorage
function getCartData() {
  try {
    return JSON.parse(localStorage.getItem('shop_co_cart') || '[]');
  } catch (e) {
    return [];
  }
}

// Lưu dữ liệu vào localStorage
function saveCartData(cart) {
  localStorage.setItem('shop_co_cart', JSON.stringify(cart));
}

// HÀM ĐỒNG BỘ BADGE SỐ LƯỢNG TRÊN ICON HEADER
window.updateGlobalCartBadge = function() {
  const cart = getCartData();
  // Tính tổng số lượng tất cả sản phẩm
  const totalCount = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 1), 0);

  // Tìm tất cả các badge giỏ hàng trên trang (cả mobile lẫn desktop)
  const badges = document.querySelectorAll('.cart-badge, #navbarCartBadge');
  badges.forEach(badge => {
    if (totalCount > 0) {
      badge.textContent = totalCount;
      badge.setAttribute('data-count', totalCount);
      badge.style.display = 'flex'; // Hiện badge khi có sản phẩm

      // Hiệu ứng nảy nhẹ khi nhảy số
      badge.classList.remove('badge-pop');
      void badge.offsetWidth; // Trigger reflow
      badge.classList.add('badge-pop');
    } else {
      // Khi = 0 hoặc xóa hết: Ẩn hoàn toàn, mất luôn số
      badge.textContent = '';
      badge.setAttribute('data-count', '0');
      badge.style.display = 'none';
    }
  });

  // Cập nhật số lượng trong Mobile Side Menu Drawer (nếu có)
  document.querySelectorAll('.global-drawer-cart-count, #drawerCartCount').forEach(el => {
    el.textContent = `(${totalCount})`;
  });
};

// Tạo alias để tương thích nếu các file khác gọi tên cũ
window.updateHeaderCartBadge = window.updateGlobalCartBadge;

// HÀM THÊM SẢN PHẨM VÀO GIỎ HÀNG (GỌI TỪ TRANG PRODUCT)
function addProductToCart(item) {
  const cart = getCartData();
  const existing = cart.find(x => x.name === item.name && x.size === item.size && x.color === item.color);
  
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.unshift(item);
  }
  
  saveCartData(cart);
  
  // 👉 Nhảy số ngay lập tức trên icon
  window.updateGlobalCartBadge();
}

// HÀM XÓA SẢN PHẨM KHỎI GIỎ HÀNG
function removeCartItemAt(idx) {
  const cart = getCartData();
  cart.splice(idx, 1);
  saveCartData(cart);

  // Render lại giao diện giỏ hàng
  renderCartView();

  // 👉 Cập nhật lại số lượng ngay lập tức (Nếu hết sản phẩm thì mất luôn số)
  window.updateGlobalCartBadge();
}

// HÀM TĂNG / GIẢM SỐ LƯỢNG TRONG GIỎ HÀNG
function modifyQty(idx, delta) {
  const cart = getCartData();
  if (cart[idx]) {
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) {
      cart.splice(idx, 1);
    }
    saveCartData(cart);
    renderCartView();

    // 👉 Đồng bộ số lượng trên icon
    window.updateGlobalCartBadge();
  }
}

// Tính toán tổng tiền Order Summary
function updateTotals(cart) {
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const discount = subtotal > 0 ? Math.round(subtotal * 0.2) : 0;
  const delivery = subtotal > 0 ? 15 : 0;
  const total = subtotal > 0 ? (subtotal - discount + delivery) : 0;

  const subEl = document.getElementById("summary-subtotal");
  const disEl = document.getElementById("summary-discount");
  const delEl = document.getElementById("summary-delivery");
  const totEl = document.getElementById("summary-total");

  if (subEl) subEl.textContent = `$${subtotal}`;
  if (disEl) disEl.textContent = `-$${discount}`;
  if (delEl) delEl.textContent = `$${delivery}`;
  if (totEl) totEl.textContent = `$${total}`;
}

// Vẽ danh sách sản phẩm trong trang cart.html
function renderCartView() {
  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  const cart = getCartData();
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px;">
        <h3 style="font-size:22px; margin-bottom:8px;">Your Cart is empty</h3>
        <p style="color:var(--text-muted); margin-bottom: 24px;">Browse our catalog and pick something you love.</p>
        <a href="category.html" class="btn-primary" style="padding: 12px 32px; border-radius: 60px;">Shop Now</a>
      </div>
    `;
    updateTotals(cart);
    return;
  }

  container.innerHTML = cart.map((prod, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${prod.image}" alt="${prod.name}" onerror="this.src='../images/product-1-main.jpg'" />
      </div>
      <div class="cart-item-details">
        <div class="cart-item-top">
          <span class="cart-item-title">${prod.name}</span>
          <button type="button" class="cart-item-remove" onclick="removeCartItemAt(${idx})" title="Remove item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF3333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
        <div class="cart-item-specs">Size: <span>${prod.size}</span></div>
        <div class="cart-item-specs">Color: <span>${prod.color}</span></div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">$${prod.price}</span>
          <div class="qty-selector">
            <span class="qty-btn" onclick="modifyQty(${idx}, -1)">&minus;</span>
            <span>${prod.quantity}</span>
            <span class="qty-btn" onclick="modifyQty(${idx}, 1)">+</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  updateTotals(cart);
}

// Khởi chạy khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  renderCartView();
  window.updateGlobalCartBadge();
});

// Tự động đồng bộ số lượng nếu người dùng mở nhiều tab cùng lúc
window.addEventListener('storage', (e) => {
  if (e.key === 'shop_co_cart') {
    renderCartView();
    window.updateGlobalCartBadge();
  }
});