// assets/cart.js
document.addEventListener("DOMContentLoaded", () => {
  // 1. Tự động tính lại tổng tiền giỏ hàng
  function updateCartTotals() {
    let subtotal = 0;
    const items = document.querySelectorAll(".cart-item");

    items.forEach((item) => {
      const price = parseFloat(item.getAttribute("data-price"));
      const qty = parseInt(item.querySelector(".cart-qty-val").textContent);
      subtotal += price * qty;
    });

    const discountRate = 0.2; // 20%
    const discount = Math.round(subtotal * discountRate);
    const deliveryFee = subtotal > 0 ? 15 : 0;
    const total = subtotal - discount + deliveryFee;

    // Cập nhật DOM
    const subtotalEl = document.getElementById("summary-subtotal");
    const discountEl = document.getElementById("summary-discount");
    const deliveryEl = document.getElementById("summary-delivery");
    const totalEl = document.getElementById("summary-total");

    if (subtotalEl) subtotalEl.textContent = `$${subtotal}`;
    if (discountEl) discountEl.textContent = `-$${discount}`;
    if (deliveryEl) deliveryEl.textContent = `$${deliveryFee}`;
    if (totalEl) totalEl.textContent = `$${total}`;
  }

  // 2. Lắng nghe tăng, giảm số lượng & xóa sản phẩm
  document.querySelectorAll(".cart-item").forEach((item) => {
    const minusBtn = item.querySelector(".cart-qty-minus");
    const plusBtn = item.querySelector(".cart-qty-plus");
    const qtyVal = item.querySelector(".cart-qty-val");
    const removeBtn = item.querySelector(".cart-item-remove");

    if (minusBtn && plusBtn && qtyVal) {
      minusBtn.addEventListener("click", () => {
        let currentQty = parseInt(qtyVal.textContent);
        if (currentQty > 1) {
          qtyVal.textContent = currentQty - 1;
          updateCartTotals();
        }
      });

      plusBtn.addEventListener("click", () => {
        let currentQty = parseInt(qtyVal.textContent);
        qtyVal.textContent = currentQty + 1;
        updateCartTotals();
      });
    }

    if (removeBtn) {
      removeBtn.addEventListener("click", () => {
        item.remove();
        updateCartTotals();
      });
    }
  });

  // Khởi chạy tính toán lúc đầu
  updateCartTotals();
});