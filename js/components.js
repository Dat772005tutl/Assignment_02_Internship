class AppHeader extends HTMLElement {
  connectedCallback() {
    // Xác định đường dẫn tương đối (đang ở thư mục gốc hay thư mục pages/)
    const isInsidePages = window.location.pathname.includes('/pages/');
    const basePath = isInsidePages ? '../' : '';
    const pagesPath = isInsidePages ? '' : 'pages/';

    this.innerHTML = `
      <!-- Top Announcement Banner -->
      <div class="top-banner">
        Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a>
        <span class="close-btn" onclick="this.parentElement.style.display='none'">&times;</span>
      </div>

      <!-- Main Navbar -->
      <header class="container">
        <nav class="navbar">
          <div class="nav-left-mobile">
            <!-- Nút mở Side Menu Drawer chuẩn xịn (Không dùng alert) -->
            <button type="button" class="mobile-menu-btn" id="btnOpenDrawer" style="background:none; border:none; padding:0;">
              &#9776;
            </button>
            <a href="${basePath}index.html" class="nav-logo">SHOP.CO</a>
          </div>

          <ul class="nav-links">
            <li><a href="${pagesPath}category.html">Shop <svg width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg></a></li>
            <li><a href="${pagesPath}category.html?filter=on-sale">On Sale</a></li>
            <li><a href="${pagesPath}category.html?filter=new-arrivals">New Arrivals</a></li>
            <li><a href="${pagesPath}category.html">Brands</a></li>
          </ul>

          <div class="nav-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
            </svg>
            <input type="text" placeholder="Search for products..." />
          </div>

          <div class="nav-icons">
            <a href="${pagesPath}category.html" class="mobile-search-icon" title="Search">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </a>
            <!-- Icon Giỏ hàng có Badge hiển thị số lượng sản phẩm -->
            <a href="${pagesPath}cart.html" class="cart-icon-link" title="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              <span class="cart-badge" id="navbarCartBadge">0</span>
            </a>
            <a href="#" title="Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </a>
          </div>
        </nav>
      </header>

      <!-- Side Menu Drawer Cho Mobile (Thay cho alert) -->
      <div class="mobile-drawer-overlay" id="drawerOverlay"></div>
      <aside class="mobile-side-drawer" id="mobileDrawer">
        <div class="drawer-header">
          <span class="drawer-logo">SHOP.CO</span>
          <button type="button" class="drawer-close-btn" id="btnCloseDrawer">&times;</button>
        </div>
        <ul class="drawer-nav-list">
          <li><a href="${pagesPath}category.html">Shop <span>&rarr;</span></a></li>
          <li><a href="${pagesPath}category.html?filter=on-sale">On Sale <span>&rarr;</span></a></li>
          <li><a href="${pagesPath}category.html?filter=new-arrivals">New Arrivals <span>&rarr;</span></a></li>
          <li><a href="${pagesPath}category.html">Brands <span>&rarr;</span></a></li>
        </ul>
        <hr class="drawer-divider" />
        <ul class="drawer-nav-list">
          <li><a href="${pagesPath}cart.html">View Cart <span id="drawerCartCount">(0)</span></a></li>
          <li><a href="#">My Account</a></li>
        </ul>
      </aside>
    `;

    // Gắn sự kiện đóng/mở Side Menu Drawer
    const btnOpen = this.querySelector('#btnOpenDrawer');
    const btnClose = this.querySelector('#btnCloseDrawer');
    const overlay = this.querySelector('#drawerOverlay');
    const drawer = this.querySelector('#mobileDrawer');

    function openDrawer() {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (btnOpen) btnOpen.addEventListener('click', openDrawer);
    if (btnClose) btnClose.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    // Cập nhật số lượng Badge giỏ hàng
    updateHeaderCartBadge();
  }
}

// Hàm cập nhật Badge số lượng sản phẩm từ localStorage
window.updateHeaderCartBadge = function() {
  try {
    const cart = JSON.parse(localStorage.getItem('shop_co_cart') || '[]');
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    
    document.querySelectorAll('#navbarCartBadge').forEach(badge => {
      badge.textContent = totalCount;
      badge.setAttribute('data-count', totalCount);
    });

    document.querySelectorAll('#drawerCartCount').forEach(badge => {
      badge.textContent = `(${totalCount})`;
    });
  } catch (e) {
    console.warn("Cart badge update error:", e);
  }
};

customElements.define('app-header', AppHeader);