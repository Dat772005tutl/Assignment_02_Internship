// =======================================================
// 1. DATABASE ĐỒNG BỘ TOÀN BỘ SẢN PHẨM (HOMEPAGE + SHOP + DETAIL)
// =======================================================
const PRODUCTS_DATABASE = [
  {
    id: "tape-details-tee",
    name: "T-shirt with Tape Details",
    category: "T-shirts",
    price: 120,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    description: "A minimalist crewneck t-shirt detailed with signature woven tape accents along the shoulders. Crafted from 100% heavy cotton jersey for structured yet breathable comfort.",
    images: [
      "../images/tape-details-1.jpg",
      "../images/tape-details-2.jpg",
      "../images/tape-details-3.jpg"
    ],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Charcoal", hex: "#3A3A3A" },
      { name: "White", hex: "#F0F0F0" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"]
  },
  {
    id: "skinny-fit-jeans",
    name: "Skinny Fit Jeans",
    category: "Jeans",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 3.5,
    description: "Premium washed stretch denim that flexes naturally with every move. Styled with authentic whiskering, five-pocket construction, and a clean tapered fit down to the ankles.",
    images: [
      "../images/skinny-jeans-1.jpg",
      "../images/skinny-jeans-2.jpg",
      "../images/skinny-jeans-3.jpg"
    ],
    colors: [
      { name: "Classic Blue", hex: "#2C4A6F" },
      { name: "Dark Indigo", hex: "#192B42" },
      { name: "Faded Gray", hex: "#4A4D52" }
    ],
    sizes: ["Medium", "Large", "X-Large"]
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    category: "Shirts",
    price: 180,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    description: "Timeless yarn-dyed checkered button-down woven from ultra-soft brushed cotton flannel. Cut in an easy relaxed fit, perfect for layering over your favorite graphic tees.",
    images: [
      "../images/checkered-shirt-1.jpg",
      "../images/checkered-shirt-2.jpg",
      "../images/checkered-shirt-3.jpg"
    ],
    colors: [
      { name: "Crimson Plaid", hex: "#8A252C" },
      { name: "Forest Green", hex: "#264834" }
    ],
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: "sleeve-striped-tee",
    name: "Sleeve Striped T-shirt",
    category: "T-shirts",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: 4.5,
    description: "Athletic-inspired raglan t-shirt with dual contrast stripes along each sleeve. Made of pre-shrunk cotton jersey that holds its shape and vibrant color wash after wash.",
    images: [
      "../images/sleeve-striped-1.jpg",
      "../images/sleeve-striped-2.jpg",
      "../images/sleeve-striped-3.jpg"
    ],
    colors: [
      { name: "Rust Orange", hex: "#B85324" },
      { name: "Jet Black", hex: "#111111" }
    ],
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: "vertical-striped-shirt",
    name: "Vertical Striped Shirt",
    category: "Shirts",
    price: 212,
    oldPrice: 232,
    discount: "-20%",
    rating: 5.0,
    description: "Camp-collar casual shirt featuring crisp vertical stripe patterns on breathable linen-blend fabric. A summer staple offering refreshing airflow and smart silhouette.",
    images: [
      "../images/vertical-striped-1.jpg",
      "../images/vertical-striped-2.jpg",
      "../images/vertical-striped-3.jpg"
    ],
    colors: [
      { name: "Sage Green", hex: "#4E6E58" },
      { name: "Navy Stripe", hex: "#20334F" }
    ],
    sizes: ["Medium", "Large", "X-Large"]
  },
  {
    id: "courage-graphic-tee",
    name: "Courage Graphic T-shirt",
    category: "T-shirts",
    price: 145,
    oldPrice: null,
    discount: null,
    rating: 4.0,
    description: "Bold motivational typography graphic tee printed on durable combed cotton. Features dropped shoulders and a boxy contemporary cut.",
    images: [
      "../images/courage-graphic-1.jpg",
      "../images/courage-graphic-2.jpg",
      "../images/courage-graphic-3.jpg"
    ],
    colors: [
      { name: "Burnt Orange", hex: "#C45B28" },
      { name: "Slate Black", hex: "#1C1C1C" }
    ],
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: "bermuda-shorts",
    name: "Loose Fit Bermuda Shorts",
    category: "Shorts",
    price: 80,
    oldPrice: null,
    discount: null,
    rating: 3.0,
    description: "Relaxed Bermuda shorts made with durable cotton denim twill. Equipped with deep slant pockets and a comfortable waistband for maximum daily comfort.",
    images: [
      "../images/bermuda-shorts-1.jpg",
      "../images/bermuda-shorts-2.jpg",
      "../images/bermuda-shorts-3.jpg"
    ],
    colors: [
      { name: "Stone Blue", hex: "#3B536E" },
      { name: "Khaki Tan", hex: "#8A7D65" }
    ],
    sizes: ["Medium", "Large", "X-Large"]
  },
  {
    id: "faded-skinny-jeans",
    name: "Faded Skinny Jeans",
    category: "Jeans",
    price: 210,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    description: "Artfully distressed light-wash skinny jeans featuring authentic faded thigh accents and flexible stretch yarn for unrestricted movement.",
    images: [
      "../images/faded-skinny-1.jpg",
      "../images/faded-skinny-2.jpg",
      "../images/faded-skinny-3.jpg"
    ],
    colors: [
      { name: "Light Wash", hex: "#6389B5" },
      { name: "Medium Blue", hex: "#3B5A82" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"]
  },
  {
    id: "one-life-tee",
    name: "ONE LIFE GRAPHIC T-SHIRT",
    category: "T-shirts",
    price: 260,
    oldPrice: 300,
    discount: "-40%",
    rating: 4.5,
    description: "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable cotton fabric, it offers superior comfort, loose streetwear styling, and high durability.",
    images: [
      "../images/one-life-1.jpg",
      "../images/one-life-2.jpg",
      "../images/one-life-3.jpg"
    ],
    colors: [
      { name: "Olive Green", hex: "#4F4631" },
      { name: "Deep Teal", hex: "#314F4A" },
      { name: "Dark Navy", hex: "#31344F" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"]
  },
  {
    id: "gradient-graphic-tee",
    name: "Gradient Graphic T-shirt",
    category: "T-shirts",
    price: 145,
    oldPrice: 242,
    discount: "-20%",
    rating: 3.5,
    description: "Make a bold artistic statement with our gradient graphic tee. Featuring vibrant color blends inspired by modern streetwear, designed on ultra-comfy preshrunk combed cotton.",
    images: [
      "../images/gradient-graphic-1.jpg",
      "../images/gradient-graphic-2.jpg",
      "../images/gradient-graphic-3.jpg"
    ],
    colors: [
      { name: "White Multi", hex: "#EAEAEA" },
      { name: "Pastel Blend", hex: "#F3C5FF" }
    ],
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: "polo-tipping-details",
    name: "Polo with Tipping Details",
    category: "Shirts",
    price: 180,
    oldPrice: 242,
    discount: "-20%",
    rating: 4.5,
    description: "A refined classic polo shirt accented with delicate contrast tipping at the ribbed collar and cuffs. Ideal for smart-casual weekends and semi-formal outings.",
    images: [
      "../images/polo-tipping-1.jpg",
      "../images/polo-tipping-2.jpg",
      "../images/polo-tipping-3.jpg"
    ],
    colors: [
      { name: "Rose Mauve", hex: "#A85A65" },
      { name: "Classic Navy", hex: "#192A45" }
    ],
    sizes: ["Medium", "Large", "X-Large"]
  },
  {
    id: "black-striped-tee",
    name: "Black Striped T-shirt",
    category: "T-shirts",
    price: 120,
    oldPrice: 150,
    discount: "-20%",
    rating: 5.0,
    description: "Timeless monochrome pinstripe tee made with premium stretch cotton. Tailored for an effortless modern silhouette that pairs perfectly with denim or chinos.",
    images: [
      "../images/black-striped-1.jpg",
      "../images/black-striped-2.jpg",
      "../images/black-striped-3.jpg"
    ],
    colors: [
      { name: "Black Stripe", hex: "#1A1A1A" },
      { name: "Charcoal Stripe", hex: "#383838" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"]
  },
  {
    id: "polo-contrast-trims",
    name: "Polo with Contrast Trims",
    category: "Shirts",
    price: 212,
    oldPrice: 242,
    discount: "-20%",
    rating: 4.0,
    description: "Contemporary textured pique knit polo shirt highlighted by clean contrast trim along the collar and button placket. Designed for effortless all-day polish.",
    images: [
      "../images/polo-contrast-1.jpg",
      "../images/polo-contrast-2.jpg",
      "../images/polo-contrast-3.jpg"
    ],
    colors: [
      { name: "Cerulean Blue", hex: "#1E6594" },
      { name: "Crisp White", hex: "#EDEDED" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"]
  }
];

let activeProduct = null;
let selectedColor = "";
let selectedSize = "";
let modalSelectedStar = 5;

// =======================================================
// 2. HÀM NẠP DỮ LIỆU TỰ ĐỘNG THEO ID TRÊN URL
// =======================================================
function loadProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const targetId = params.get("id");

  // Tìm đúng sản phẩm theo id
  activeProduct = PRODUCTS_DATABASE.find(p => p.id === targetId) || PRODUCTS_DATABASE[0];

  selectedColor = activeProduct.colors[0].name;
  selectedSize = activeProduct.sizes[0];

  // 1. Breadcrumb
  const breadcrumbEl = document.getElementById("productBreadcrumb");
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = `
      <a href="../index.html">Home</a> &gt; 
      <a href="category.html">Shop</a> &gt; 
      <a href="category.html">${activeProduct.category}</a> &gt; 
      <span>${activeProduct.name}</span>
    `;
  }

  // 2. Ảnh to chính
  const mainImg = document.getElementById("mainProductImg");
  if (mainImg) {
    mainImg.src = activeProduct.images[0];
    mainImg.alt = activeProduct.name;
    mainImg.onerror = function() {
      this.src = "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700";
    };
  }

  // 3. 3 Ảnh Thumbnail
  const thumbList = document.getElementById("thumbnailList");
  if (thumbList) {
    const validImages = [
      activeProduct.images[0],
      activeProduct.images[1] || activeProduct.images[0],
      activeProduct.images[2] || activeProduct.images[0]
    ];

    thumbList.innerHTML = validImages.map((imgUrl, idx) => `
      <div class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="switchMainImage(this, '${imgUrl}')">
        <img src="${imgUrl}" alt="${activeProduct.name}" onerror="this.src='${activeProduct.images[0]}'" />
      </div>
    `).join("");
  }

  // 4. Tiêu đề
  const titleEl = document.getElementById("productTitle");
  if (titleEl) titleEl.textContent = activeProduct.name;

  // 5. Đánh giá sao
  const ratingEl = document.getElementById("productRatingContainer");
  if (ratingEl) {
    const fullStars = Math.floor(activeProduct.rating);
    ratingEl.innerHTML = `
      <span>${"&#9733;".repeat(fullStars)}${"&#9734;".repeat(5 - fullStars)}</span>
      <span class="rating-num">${activeProduct.rating}/5</span>
    `;
  }

  // 6. Giá tiền & Giảm giá
  const priceEl = document.getElementById("productPriceContainer");
  if (priceEl) {
    priceEl.innerHTML = `
      <span>$${activeProduct.price}</span>
      ${activeProduct.oldPrice ? `<span class="old-price">$${activeProduct.oldPrice}</span>` : ""}
      ${activeProduct.discount ? `<span class="badge-sale">${activeProduct.discount}</span>` : ""}
    `;
  }

  // 7. Đoạn giới thiệu riêng cho từng sản phẩm
  const descEl = document.getElementById("productDesc");
  if (descEl) descEl.textContent = activeProduct.description;

  // 8. Màu sắc
  const colorsEl = document.getElementById("colorOptionsRow");
  if (colorsEl) {
    colorsEl.innerHTML = activeProduct.colors.map((c, idx) => `
      <div class="color-circle ${idx === 0 ? 'active' : ''}" 
           data-color="${c.name}" 
           style="background:${c.hex};" 
           onclick="selectColor(this)">
        ${idx === 0 ? '&#10003;' : ''}
      </div>
    `).join("");
  }

  // 9. Kích cỡ (Size)
  const sizesEl = document.getElementById("sizeChipsRow");
  if (sizesEl) {
    sizesEl.innerHTML = activeProduct.sizes.map((s, idx) => `
      <button type="button" 
              class="size-chip ${idx === 0 ? 'active' : ''}" 
              data-size="${s}" 
              onclick="selectSize(this)">
        ${s}
      </button>
    `).join("");
  }

  // 10. Reset số lượng về 1
  const qtyVal = document.getElementById("qtyVal");
  if (qtyVal) qtyVal.textContent = "1";
}

function switchMainImage(element, src) {
  document.querySelectorAll('.thumb-img').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  const mainImg = document.getElementById('mainProductImg');
  if (mainImg) {
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 120);
  }
}

function selectColor(element) {
  document.querySelectorAll('.color-circle').forEach(el => el.innerHTML = '');
  element.innerHTML = '&#10003;';
  selectedColor = element.getAttribute('data-color');
}

function selectSize(element) {
  document.querySelectorAll('.size-chip').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  selectedSize = element.getAttribute('data-size');
}

function showToast(message, viewCartUrl = "cart.html") {
  let toast = document.getElementById("cartToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cartToast";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="toast-icon">&#10003;</span>
    <div class="toast-content">
      <span>${message}</span>
      <a href="${viewCartUrl}">Thanh toán ngay &rarr;</a>
    </div>
    <button type="button" class="toast-close" onclick="this.parentElement.classList.remove('show')">&times;</button>
  `;

  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// =======================================================
// 3. HỆ THỐNG REVIEWS & LOAD MORE
// =======================================================
let initialReviews = [
  { name: "Samantha D.", rating: 5, date: "August 14, 2023", text: "I absolutely love this item! The design is unique and the fabric feels so comfortable." },
  { name: "Alex M.", rating: 4, date: "August 15, 2023", text: "The garment exceeded my expectations! The colors are vibrant and print quality is top-notch." },
  { name: "Ethan R.", rating: 4, date: "August 16, 2023", text: "A must-have for anyone who appreciates thoughtful aesthetic detail." },
  { name: "Olivia P.", rating: 4, date: "August 17, 2023", text: "As a UI/UX enthusiast, I value simplicity and functionality. This represents both." }
];

let queuedReviews = [
  { name: "Liam K.", rating: 4, date: "August 18, 2023", text: "A fusion of comfort and creativity. Soft fabric with outstanding stitching." },
  { name: "Ava H.", rating: 5, date: "August 19, 2023", text: "I'm wearing a piece of design philosophy. Very thoughtful layout." }
];

let userSubmittedReviews = [];
let activeStarFilter = "all";
let activeSortOrder = "latest";

function renderReviewsGrid() {
  const container = document.getElementById("reviewsGridContainer");
  if (!container) return;

  let all = [...userSubmittedReviews, ...initialReviews];
  let filtered = all.filter(r => activeStarFilter === "all" ? true : r.rating === parseInt(activeStarFilter));

  if (activeSortOrder === "latest") filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (activeSortOrder === "oldest") filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  else if (activeSortOrder === "highest") filtered.sort((a, b) => b.rating - a.rating);
  else if (activeSortOrder === "lowest") filtered.sort((a, b) => a.rating - b.rating);

  container.innerHTML = filtered.map(r => `
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

  const heading = document.getElementById("allReviewsCountHeading");
  if (heading) heading.innerHTML = `All Reviews <span>(${451 + userSubmittedReviews.length})</span>`;
}

window.filterByStars = function(stars, el) {
  document.querySelectorAll(".filter-star-item").forEach(x => x.classList.remove("active"));
  el.classList.add("active");
  activeStarFilter = stars;
  renderReviewsGrid();
  document.getElementById("filterStarDropdown")?.classList.remove("show");
};

window.sortReviews = function(val) {
  activeSortOrder = val;
  renderReviewsGrid();
};

// =======================================================
// 4. KHỞI TẠO SỰ KIỆN
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
  loadProductFromUrl();
  renderReviewsGrid();

  // Tăng giảm số lượng
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

  // Nút Add to Cart
  const addBtn = document.getElementById("btnAddToCart");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const count = parseInt(val ? val.textContent : 1);
      const cartItem = {
        id: activeProduct.id,
        name: activeProduct.name,
        price: activeProduct.price,
        image: activeProduct.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity: count
      };

      if (typeof addProductToCart === "function") {
        addProductToCart(cartItem);
      }
      showToast(`Đã thêm ${count} sản phẩm "${cartItem.name}" vào giỏ hàng!`);
    });
  }

  // Menu lọc sao
  const filterBtn = document.getElementById("btnFilterStarDropdown");
  const filterDropdown = document.getElementById("filterStarDropdown");
  if (filterBtn && filterDropdown) {
    filterBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      filterDropdown.classList.toggle("show");
    });
    window.addEventListener("click", () => filterDropdown.classList.remove("show"));
  }

  // Modal Review
  const modal = document.getElementById("reviewModal");
  const openModal = document.getElementById("btnOpenReviewModal");
  const closeModal = document.getElementById("btnCloseReviewModal");
  const cancelBtn = document.getElementById("btnCancelReview");
  if (openModal && modal) openModal.addEventListener("click", () => modal.classList.add("show"));
  if (closeModal && modal) closeModal.addEventListener("click", () => modal.classList.remove("show"));
  if (cancelBtn && modal) cancelBtn.addEventListener("click", () => modal.classList.remove("show"));

  // Chọn sao trong modal
  const starSpans = document.querySelectorAll("#modalStarPicker span");
  starSpans.forEach(span => {
    span.addEventListener("click", () => {
      modalSelectedStar = parseInt(span.getAttribute("data-star"));
      starSpans.forEach(s => {
        const starVal = parseInt(s.getAttribute("data-star"));
        if (starVal <= modalSelectedStar) s.classList.add("active");
        else s.classList.remove("active");
      });
    });
  });

  // Gửi review
  const form = document.getElementById("formWriteReview");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reviewerName").value.trim();
      const text = document.getElementById("reviewerText").value.trim();
      userSubmittedReviews.unshift({
        name,
        rating: modalSelectedStar,
        date: "Today",
        text,
        isMine: true
      });
      modal.classList.remove("show");
      form.reset();
      showToast("Đã gửi đánh giá thành công! Bấm 'Load More Reviews' để xem.");

      const loadMoreBtn = document.getElementById("btnLoadMoreReviews");
      if (loadMoreBtn) {
        loadMoreBtn.textContent = `Load More Reviews (${userSubmittedReviews.length} New Review Ready)`;
      }
    });
  }

  // Load More Reviews
  const loadMoreBtn = document.getElementById("btnLoadMoreReviews");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      if (queuedReviews.length > 0) {
        initialReviews = [...queuedReviews, ...initialReviews];
        queuedReviews = [];
      }
      renderReviewsGrid();
      loadMoreBtn.textContent = "All Reviews Loaded";
      loadMoreBtn.style.opacity = "0.7";
      loadMoreBtn.style.cursor = "default";
    });
  }
});