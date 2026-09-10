
const INITIAL_CART = [
  {
    id: "default-1",
    name: "Gradient Graphic T-shirt",
    price: 145,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=150",
    size: "Large",
    color: "White",
    quantity: 1
  },
  {
    id: "default-2",
    name: "Checkered Shirt",
    price: 180,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150",
    size: "Medium",
    color: "Red",
    quantity: 1
  },
  {
    id: "default-3",
    name: "Skinny Fit Jeans",
    price: 240,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150",
    size: "Large",
    color: "Blue",
    quantity: 1
  }
];

// Lấy danh sách sản phẩm từ localStorage
function getCart() {
  const cartData = localStorage.getItem("shop_co_cart");
  if (!cartData) {
    localStorage.setItem("shop_co_cart", JSON.stringify(INITIAL_CART));
    return INITIAL_CART;
  }
  return JSON.parse(cartData);
}

// Lưu lại danh sách vào localStorage
function saveCart(cart) {
  localStorage.setItem("shop_co_cart", JSON.stringify(cart));
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(product) {
  let cart = getCart();
  
  // Tìm xem sản phẩm cùng ID, cùng Size, cùng Màu đã có trong giỏ chưa
  const existingItem = cart.find(
    item => item.name === product.name && item.size === product.size && item.color === product.color
  );

  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cart.unshift(product); // Thêm lên đầu danh sách
  }

  saveCart(cart);
}

// Tính toán lại tổng tiền giỏ hàng
function updateCartSummary(cart) {
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  const discountRate = 0.2; // Giảm giá 20%
  const discount = Math.round(subtotal * discountRate);
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal > 0 ? (subtotal - discount + deliveryFee) : 0;

  const subEl = document.getElementById("summary-subtotal");
  const disEl = document.getElementById("summary-discount");
  const delEl = document.getElementById("summary-delivery");
  const totEl = document.getElementById("summary-total");

  if (subEl) subEl.textContent = `$${subtotal}`;
  if (disEl) disEl.textContent = `-$${discount}`;
  if (delEl) delEl.textContent = `$${deliveryFee}`;
  if (totEl) totEl.textContent = `$${total}`;
}

// Render động danh sách sản phẩm ra trang cart.html
function renderCartPage() {
  const container = document.getElementById("cartItemsContainer");
  if (!container) return; // Nếu không phải trang cart thì bỏ qua

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 20px;">
        <h3 style="font-size: 20px; margin-bottom: 10px;">Giỏ hàng của bạn đang trống!</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Hãy dạo một vòng và chọn cho mình bộ trang phục ưng ý nhé.</p>
        <a href="category.html" class="btn-primary" style="padding: 12px 32px;">Tiếp tục mua sắm</a>
      </div>
    `;
    updateCartSummary(cart);
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-details">
        <div class="cart-item-top">
          <span class="cart-item-title">${item.name}</span>
          <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove">&#128465;</button>
        </div>
        <div class="cart-item-specs">Size: <span>${item.size}</span></div>
        <div class="cart-item-specs">Color: <span>${item.color}</span></div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">$${item.price}</span>
          <div class="qty-selector" style="width:130px; padding:8px 16px;">
            <span class="qty-btn" onclick="changeQuantity(${index}, -1)">&minus;</span>
            <span class="qty-val">${item.quantity}</span>
            <span class="qty-btn" onclick="changeQuantity(${index}, 1)">+</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  updateCartSummary(cart);
}

// Thay đổi số lượng sản phẩm (+ / -)
window.changeQuantity = function(index, delta) {
  let cart = getCart();
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    saveCart(cart);
    renderCartPage();
  }
};

// Xóa 1 sản phẩm khỏi giỏ hàng
window.removeCartItem = function(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartPage();
};

// Khởi chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  // 1. Nếu đang ở trang cart.html -> Render giỏ hàng
  renderCartPage();

  // 2. Xử lý nút áp dụng mã giảm giá
  const promoBtn = document.getElementById("applyPromoBtn");
  const promoInput = document.getElementById("promoInput");
  if (promoBtn && promoInput) {
    promoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) {
        alert("Vui lòng nhập mã giảm giá!");
      } else if (code === "SHOP20") {
        alert("Áp dụng mã giảm giá SHOP20 thành công (-20%)!");
      } else {
        alert(`Đã áp dụng mã: ${code}`);
      }
    });
  }

  // 3. Xử lý nút thanh toán Go to Checkout
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const cart = getCart();
      if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
        return;
      }
      alert("🎉 Đặt hàng và thanh toán thành công!\nCảm ơn bạn đã mua sắm tại SHOP.CO.");
      localStorage.setItem("shop_co_cart", JSON.stringify([])); // Xóa giỏ hàng sau khi mua
      renderCartPage();
    });
  }
});