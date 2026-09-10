class AppHeader extends HTMLElement {
  connectedCallback() {
    const isInsidePages = window.location.pathname.includes('/pages/');
    const basePath = isInsidePages ? '../' : './';
    const pagesPath = isInsidePages ? './' : 'pages/';

    this.innerHTML = `
      <div class="top-banner">
        Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a>
        <span class="close-btn" onclick="this.parentElement.style.display='none'">&times;</span>
      </div>
      <header class="container">
        <nav class="navbar">
          <div class="nav-left-mobile">
            <div class="mobile-menu-btn" id="mobileMenuToggle">&#9776;</div>
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
            <input type="text" id="globalSearchInput" placeholder="Search for products..." />
          </div>
          <div class="nav-icons">
            <a href="${pagesPath}category.html" class="mobile-search-icon" title="Search">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"/>
              </svg>
            </a>
            <a href="${pagesPath}cart.html" title="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </a>
            <a href="#" title="Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </a>
          </div>
        </nav>
      </header>
    `;
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container newsletter-wrapper">
        <div class="newsletter-box">
          <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <div class="newsletter-form">
            <div class="newsletter-input-group">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <button type="button" class="newsletter-btn">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
      <footer>
        <div class="container footer-top">
          <div class="footer-about">
            <h3 class="nav-logo">SHOP.CO</h3>
            <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <div class="social-icons">
              <div class="social-circle"><svg width="15" height="15" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></div>
              <div class="social-circle"><svg width="15" height="15" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></div>
              <div class="social-circle"><svg width="15" height="15" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></div>
              <div class="social-circle"><svg width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></div>
            </div>
          </div>
          <div class="footer-col">
            <h4>COMPANY</h4>
            <ul><li><a href="#">About</a></li><li><a href="#">Features</a></li><li><a href="#">Works</a></li><li><a href="#">Career</a></li></ul>
          </div>
          <div class="footer-col">
            <h4>HELP</h4>
            <ul><li><a href="#">Customer Support</a></li><li><a href="#">Delivery Details</a></li><li><a href="#">Terms & Conditions</a></li><li><a href="#">Privacy Policy</a></li></ul>
          </div>
          <div class="footer-col">
            <h4>FAQ</h4>
            <ul><li><a href="#">Account</a></li><li><a href="#">Manage Deliveries</a></li><li><a href="#">Orders</a></li><li><a href="#">Payments</a></li></ul>
          </div>
          <div class="footer-col">
            <h4>RESOURCES</h4>
            <ul><li><a href="#">Free eBooks</a></li><li><a href="#">Development Tutorial</a></li><li><a href="#">How to - Blog</a></li><li><a href="#">Youtube Playlist</a></li></ul>
          </div>
        </div>
        <div class="container footer-bottom">
          <p>Shop.co &copy; 2000-2023, All Rights Reserved</p>
          <div class="payment-badges">
            <div class="payment-badge"><svg width="34" height="12" viewBox="0 0 34 12"><text x="50%" y="10" font-family="'Arial Black', Arial, sans-serif" font-weight="900" font-style="italic" font-size="11" fill="#1A1F71" text-anchor="middle">VISA</text></svg></div>
            <div class="payment-badge"><svg width="28" height="18" viewBox="0 0 28 18"><circle cx="9" cy="9" r="8" fill="#EB001B"/><circle cx="19" cy="9" r="8" fill="#F79E1B"/><path d="M14 3.3a7.9 7.9 0 0 0-3.2 5.7 7.9 7.9 0 0 0 3.2 5.7 7.9 7.9 0 0 0 3.2-5.7A7.9 7.9 0 0 0 14 3.3z" fill="#FF5F00"/></svg></div>
            <div class="payment-badge"><svg width="36" height="12" viewBox="0 0 36 12"><text x="50%" y="10" font-family="sans-serif" font-weight="800" font-style="italic" font-size="10.5" text-anchor="middle"><tspan fill="#003087">Pay</tspan><tspan fill="#0079C1">Pal</tspan></text></svg></div>
            <div class="payment-badge"><svg width="36" height="13" viewBox="0 0 36 13"><path d="M4.3 2.9c-.3.4-.7.6-1.2.5 0-.5.2-.9.5-1.2.3-.3.7-.5 1.1-.5.1.5-.1.9-.4 1.2zm.4.7c-.6 0-1.2.4-1.5.4-.4 0-.8-.4-1.4-.4C1 3.6.4 4.2.1 5c-.9 1.4-.2 3.5.7 4.7.4.6.9 1.2 1.5 1.2.6 0 .8-.4 1.5-.4.7 0 .9.4 1.5.4.6 0 1.1-.6 1.5-1.2.5-.7.7-1.3.7-1.4-.1 0-1.3-.5-1.3-1.9 0-1.2 1-1.8 1-1.8-.6-.9-1.5-1-1.8-1z" fill="#000"/><text x="12" y="9.8" font-family="sans-serif" font-weight="700" font-size="10" fill="#000">Pay</text></svg></div>
            <div class="payment-badge"><svg width="38" height="13" viewBox="0 0 38 13"><path d="M9.8 6.6c0-.3 0-.6-.1-.9H5.5v1.7h2.4c-.1.6-.4 1.1-.9 1.4v1.2h1.5c.8-.8 1.3-2 1.3-3.4z" fill="#4285F4"/><path d="M5.5 11c1.2 0 2.2-.4 3-1.1L7 8.7c-.4.3-.9.5-1.5.5-1.1 0-2.1-.8-2.4-1.8H1.5v1.2C2.3 10.2 3.8 11 5.5 11z" fill="#34A853"/><path d="M3.1 7.4c-.1-.3-.1-.6-.1-.9s0-.6.1-.9V4.4H1.5C1.2 5 1 5.7 1 6.5s.2 1.5.5 2.1l1.6-1.2z" fill="#FBBC05"/><path d="M5.5 3.8c.7 0 1.2.2 1.7.7l1.3-1.3C7.7 2.4 6.7 2 5.5 2 3.8 2 2.3 2.8 1.5 4.4l1.6 1.2c.3-1 1.3-1.8 2.4-1.8z" fill="#EA4335"/><text x="14" y="9.8" font-family="sans-serif" font-weight="600" font-size="10" fill="#5F6368">Pay</text></svg></div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);