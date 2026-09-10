const DEFAULT_CART = [
  { id: "c1", name: "Gradient Graphic T-shirt", price: 145, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=150", size: "Large", color: "White", quantity: 1 },
  { id: "c2", name: "Checkered Shirt", price: 180, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150", size: "Medium", color: "Red", quantity: 1 },
  { id: "c3", name: "Skinny Fit Jeans", price: 240, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150", size: "Large", color: "Blue", quantity: 1 }
];

function getCartData() {
  const raw = localStorage.getItem("shop_co_cart");
  if (!raw) {
    localStorage.setItem("shop_co_cart", JSON.stringify(DEFAULT_CART));
    return DEFAULT_CART;
  }
  return JSON.parse(raw);
}

function saveCartData(cart) {
  localStorage.setItem("shop_co_cart", JSON.stringify(cart));
}

function addProductToCart(item) {
  const cart = getCartData();
  const existing = cart.find(x => x.name === item.name && x.size === item.size && x.color === item.color);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.unshift(item);
  }
  saveCartData(cart);
}

function renderCartView() {
  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  const cart = getCartData();
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <h3>Your Cart is empty</h3>
        <p style="color:var(--text-muted); margin: 8px 0 20px;">Explore our catalog to find items you love.</p>
        <a href="category.html" class="btn-primary" style="padding: 12px 28px;">Shop Now</a>
      </div>
    `;
    updateTotals(cart);
    return;
  }

  container.innerHTML = cart.map((prod, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${prod.image}" alt="${prod.name}" />
      </div>
      <div class="cart-item-details">
        <div class="cart-item-top">
          <span class="cart-item-title">${prod.name}</span>
          <button class="cart-item-remove" onclick="removeCartItemAt(${idx})">&#128465;</button>
        </div>
        <div class="cart-item-specs">Size: <span>${prod.size}</span></div>
        <div class="cart-item-specs">Color: <span>${prod.color}</span></div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">$${prod.price}</span>
          <div class="qty-selector" style="width:110px; padding:6px 14px;">
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

function updateTotals(cart) {
  let subtotal = 0;
  cart.forEach(x => subtotal += x.price * x.quantity);

  const discount = Math.round(subtotal * 0.2);
  const delivery = subtotal > 0 ? 15 : 0;
  const total = subtotal > 0 ? subtotal - discount + delivery : 0;

  const subEl = document.getElementById("summary-subtotal");
  const disEl = document.getElementById("summary-discount");
  const delEl = document.getElementById("summary-delivery");
  const totEl = document.getElementById("summary-total");

  if (subEl) subEl.textContent = `$${subtotal}`;
  if (disEl) disEl.textContent = `-$${discount}`;
  if (delEl) delEl.textContent = `$${delivery}`;
  if (totEl) totEl.textContent = `$${total}`;
}

window.modifyQty = function(idx, change) {
  const cart = getCartData();
  if (cart[idx]) {
    cart[idx].quantity += change;
    if (cart[idx].quantity < 1) cart[idx].quantity = 1;
    saveCartData(cart);
    renderCartView();
  }
};

window.removeCartItemAt = function(idx) {
  const cart = getCartData();
  cart.splice(idx, 1);
  saveCartData(cart);
  renderCartView();
};

document.addEventListener("DOMContentLoaded", () => {
  renderCartView();

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const cart = getCartData();
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      alert("Order placed successfully! Thank you for shopping with SHOP.CO.");
      saveCartData([]);
      renderCartView();
    });
  }
});