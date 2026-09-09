document.addEventListener("DOMContentLoaded", () => {
  function updateCartTotals() {
    let subtotal = 0;
    const items = document.querySelectorAll(".cart-item");
    items.forEach((item) => {
      const price = parseFloat(item.getAttribute("data-price"));
      const qtyEl = item.querySelector(".cart-qty-val");
      if (qtyEl) {
        const qty = parseInt(qtyEl.textContent);
        subtotal += price * qty;
      }
    });

    const discount = Math.round(subtotal * 0.2);
    const deliveryFee = subtotal > 0 ? 15 : 0;
    const total = subtotal - discount + deliveryFee;

    const subEl = document.getElementById("summary-subtotal");
    const disEl = document.getElementById("summary-discount");
    const delEl = document.getElementById("summary-delivery");
    const totEl = document.getElementById("summary-total");

    if (subEl) subEl.textContent = `$${subtotal}`;
    if (disEl) disEl.textContent = `-$${discount}`;
    if (delEl) delEl.textContent = `$${deliveryFee}`;
    if (totEl) totEl.textContent = `$${total}`;
  }

  document.querySelectorAll(".cart-item").forEach((item) => {
    const minus = item.querySelector(".cart-qty-minus");
    const plus = item.querySelector(".cart-qty-plus");
    const val = item.querySelector(".cart-qty-val");
    const removeBtn = item.querySelector(".cart-item-remove");

    if (minus && plus && val) {
      minus.addEventListener("click", () => {
        let c = parseInt(val.textContent);
        if (c > 1) { val.textContent = c - 1; updateCartTotals(); }
      });
      plus.addEventListener("click", () => {
        let c = parseInt(val.textContent);
        val.textContent = c + 1;
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

  updateCartTotals();
});