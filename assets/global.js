// assets/global.js
document.addEventListener("DOMContentLoaded", () => {
  // 1. Tắt Top Banner khuyến mãi khi bấm dấu X
  const closeBannerBtn = document.querySelector(".close-btn");
  const topBanner = document.querySelector(".top-banner");
  if (closeBannerBtn && topBanner) {
    closeBannerBtn.addEventListener("click", () => {
      topBanner.style.display = "none";
    });
  }

  // 2. Bật tắt Mobile Menu khi click icon Hamburger
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});