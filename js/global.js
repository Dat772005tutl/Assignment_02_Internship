
function initGlobalMobileDrawer() {
  // Tự động nhận diện đang ở trang chủ hay thư mục pages/
  const isInsidePages = window.location.pathname.includes('/pages/');
  const homeUrl = isInsidePages ? '../index.html' : 'index.html';
  const categoryUrl = isInsidePages ? 'category.html' : 'pages/category.html';
  const cartUrl = isInsidePages ? 'cart.html' : 'pages/cart.html';

  // 1. Tạo Overlay & Drawer vào body nếu chưa có
  let overlay = document.querySelector('.mobile-drawer-overlay');
  let drawer = document.querySelector('.mobile-side-drawer');

  if (!drawer) {
    overlay = document.createElement('div');
    overlay.className = 'mobile-drawer-overlay';
    document.body.appendChild(overlay);

    drawer = document.createElement('aside');
    drawer.className = 'mobile-side-drawer';
    drawer.innerHTML = `
      <div class="drawer-header">
        <span class="drawer-logo">SHOP.CO</span>
        <button type="button" class="drawer-close-btn" id="globalDrawerCloseBtn">&times;</button>
      </div>
      <ul class="drawer-nav-list">
        <li><a href="${homeUrl}">Home <span>&rarr;</span></a></li>
        <li><a href="${categoryUrl}">Shop <span>&rarr;</span></a></li>
        <li><a href="${categoryUrl}?filter=on-sale">On Sale <span>&rarr;</span></a></li>
        <li><a href="${categoryUrl}?filter=new-arrivals">New Arrivals <span>&rarr;</span></a></li>
        <li><a href="${categoryUrl}">Brands <span>&rarr;</span></a></li>
      </ul>
      <hr class="drawer-divider" />
      <ul class="drawer-nav-list">
        <li><a href="${cartUrl}">View Cart <span class="global-drawer-cart-count">(0)</span></a></li>
        <li><a href="#">My Account <span>&rarr;</span></a></li>
      </ul>
    `;
    document.body.appendChild(drawer);
  }

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateGlobalCartBadge();
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 2. Tìm tất cả nút hamburger .mobile-menu-btn trên trang, triệt tiêu alert() và gán mở drawer
  const menuButtons = document.querySelectorAll('.mobile-menu-btn');
  menuButtons.forEach(btn => {
    btn.removeAttribute('onclick'); // Xóa bỏ lệnh alert() cũ
    btn.onclick = null;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openDrawer();
    });
  });

  const closeBtn = drawer.querySelector('#globalDrawerCloseBtn');
  if (closeBtn) closeBtn.onclick = closeDrawer;
  if (overlay) overlay.onclick = closeDrawer;

  // 3. Cập nhật số lượng giỏ hàng
  updateGlobalCartBadge();
}

// Hàm cập nhật Badge số lượng giỏ hàng trên Navbar & Drawer
window.updateGlobalCartBadge = function() {
  try {
    const cart = JSON.parse(localStorage.getItem('shop_co_cart') || '[]');
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    document.querySelectorAll('.cart-badge, #navbarCartBadge').forEach(badge => {
      badge.textContent = totalCount;
      badge.setAttribute('data-count', totalCount);
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    document.querySelectorAll('.global-drawer-cart-count, #drawerCartCount').forEach(badge => {
      badge.textContent = `(${totalCount})`;
    });
  } catch (e) {
    console.warn("Badge error:", e);
  }
};

// Tự động chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  initGlobalMobileDrawer();
});