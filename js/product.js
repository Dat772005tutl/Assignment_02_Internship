let selectedColor = "Olive Green";
let selectedSize = "Large";

function switchMainImage(element, src) {
  document.querySelectorAll('.thumb-img').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  const mainImg = document.getElementById('mainProductImg');
  if (mainImg) {
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 150);
  }
}

function selectColor(element) {
  document.querySelectorAll('.color-circle').forEach(el => el.innerHTML = '');
  element.innerHTML = '&#10003;';
  selectedColor = element.getAttribute('data-color') || "Olive Green";
}

function selectSize(element) {
  document.querySelectorAll('.size-chip').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  selectedSize = element.getAttribute('data-size') || "Large";
}

let initialReviews = [
  { name: "Samantha D.", rating: 5, date: "August 14, 2023", text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable." },
  { name: "Alex M.", rating: 4, date: "August 15, 2023", text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch." },
  { name: "Ethan R.", rating: 4, date: "August 16, 2023", text: "This t-shirt is a must-have for anyone who appreciates good design." },
  { name: "Olivia P.", rating: 4, date: "August 17, 2023", text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt represents both perfectly." }
];

let queuedReviews = [
  { name: "Liam K.", rating: 4, date: "August 18, 2023", text: "This t-shirt is a fusion of comfort and creativity. Fabric is wonderfully soft." },
  { name: "Ava H.", rating: 5, date: "August 19, 2023", text: "I'm wearing a piece of design philosophy. Very thoughtful layout." }
];

let userReviews = [];

function renderReviewsGrid() {
  const container = document.getElementById("reviewsGridContainer");
  if (!container) return;

  let all = [...userReviews, ...initialReviews];

  container.innerHTML = all.map(r => `
    <div class="review-card-item ${r.isMine ? 'new-user-review' : ''}">
      <div>
        <div class="review-card-header">
          <div class="stars">${"&#9733;".repeat(r.rating)}${"&#9734;".repeat(5 - r.rating)}</div>
          <button class="btn-more-options">&#8943;</button>
        </div>
        <div class="review-user-name">
          ${r.name} <span class="verified-icon">&#10003;</span>
          ${r.isMine ? '<span class="my-review-badge">Your Review</span>' : ''}
        </div>
        <p class="review-body-text">"${r.text}"</p>
      </div>
      <div class="review-posted-date">Posted on ${r.date}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderReviewsGrid();

  const minus = document.getElementById('qtyMinus');
  const plus = document.getElementById('qtyPlus');
  const val = document.getElementById('qtyVal');
  if (minus && plus && val) {
    minus.addEventListener('click', () => {
      let c = parseInt(val.textContent);
      if (c > 1) val.textContent = c - 1;
    });
    plus.addEventListener('click', () => {
      let c = parseInt(val.textContent);
      val.textContent = c + 1;
    });
  }

  const addBtn = document.getElementById("btnAddToCart");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const count = parseInt(val ? val.textContent : 1);
      const item = {
        id: "tee-1",
        name: "ONE LIFE GRAPHIC T-SHIRT",
        price: 260,
        image: document.getElementById("mainProductImg")?.src || "",
        size: selectedSize,
        color: selectedColor,
        quantity: count
      };
      if (typeof addProductToCart === "function") {
        addProductToCart(item);
      }
      alert(`Added ${count} x "${item.name}" to cart!`);
      window.location.href = "cart.html";
    });
  }

  const modal = document.getElementById("reviewModal");
  const openModal = document.getElementById("btnOpenReviewModal");
  const closeModal = document.getElementById("btnCloseReviewModal");
  const cancelBtn = document.getElementById("btnCancelReview");

  if (openModal && modal) openModal.addEventListener("click", () => modal.classList.add("show"));
  if (closeModal && modal) closeModal.addEventListener("click", () => modal.classList.remove("show"));
  if (cancelBtn && modal) cancelBtn.addEventListener("click", () => modal.classList.remove("show"));

  const form = document.getElementById("formWriteReview");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reviewerName").value.trim();
      const text = document.getElementById("reviewerText").value.trim();
      const reviewObj = {
        name,
        rating: 5,
        date: "Today",
        text,
        isMine: true
      };
      userReviews.unshift(reviewObj);
      modal.classList.remove("show");
      form.reset();
      alert("Review submitted! Click 'Load More Reviews' below to show your feedback.");
    });
  }

  const loadMoreBtn = document.getElementById("btnLoadMoreReviews");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      if (queuedReviews.length > 0) {
        initialReviews = [...initialReviews, ...queuedReviews];
        queuedReviews = [];
      }
      renderReviewsGrid();
      loadMoreBtn.textContent = "All Reviews Loaded";
      loadMoreBtn.style.opacity = "0.7";
    });
  }
});