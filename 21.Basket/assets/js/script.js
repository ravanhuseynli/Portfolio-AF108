
let products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
 
];

let wishlistElement = document.querySelector("#wishlist");
let productsElement = document.querySelector(".cards");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const allUsers = JSON.parse(localStorage.getItem("userData")) || [];

function saveWishlistForUser(wishlistIds) {
  if (!currentUser) return;
  const index = allUsers.findIndex(user => user.id === currentUser.id);
  if (index !== -1) {
    allUsers[index].wishList = wishlistIds;
    localStorage.setItem("userData", JSON.stringify(allUsers));
    localStorage.setItem("currentUser", JSON.stringify(allUsers[index]));
  }
}

function getWishlistForUser() {
  if (!currentUser) return [];
  const user = allUsers.find(u => u.id === currentUser.id);
  return user?.wishList || [];
}

function renderProducts() {
  productsElement.innerHTML = "";
  const wishlistIds = getWishlistForUser();

  products.forEach((product) => {
    const isInWishlist = wishlistIds.includes(product.id);
    const productElement = document.createElement("div");
    productElement.className = "card col-md-4";
    productElement.innerHTML = `
      <div class="card-image">
        <i class="fa-heart wishlist-icon ${isInWishlist ? 'fa-solid text-danger' : 'fa-regular'}" data-id="${product.id}"></i>
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="card-content">
        <h2 class="card-title">${product.title}</h2>
        <p class="card-category">Category: ${product.category}</p>
        <p class="card-description">${product.description}</p>
        <div class="card-footer">
          <span class="card-price">$${product.price}</span>
          <div class="card-rating">
            <span>⭐ ${product.rating.rate}</span>
            <span>(${product.rating.count} reviews)</span>
          </div>
          <button class="btn btn-primary add-to-basket mt-2" data-id="${product.id}">Add to Basket</button>
        </div>
      </div>
    `;
    productsElement.appendChild(productElement);
  });

  attachWishlistListeners();
  attachBasketListeners();
}

function attachBasketListeners() {
  document.querySelectorAll(".add-to-basket").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const product = products.find(p => p.id === id);
      if (!product) return;

      let basket = JSON.parse(localStorage.getItem("basket")) || [];
      const existing = basket.find(item => item.id === id);

      if (existing) {
        existing.count += 1;
      } else {
        basket.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          category: product.category,
          count: 1
        });
      }

      localStorage.setItem("basket", JSON.stringify(basket));

      Toastify({
        text: `${product.title} added to basket!`,
        style: { background: "green" },
        duration: 2000
      }).showToast();
    });
  });
}

function attachWishlistListeners() {
  document.querySelectorAll(".wishlist-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      const id = parseInt(icon.dataset.id);

      if (!currentUser) {
        Toastify({
          text: "Əvvəlcə daxil olun!",
          style: { background: "red" },
          duration: 3000
        }).showToast();
        return;
      }

      let wishlist = getWishlistForUser();
      const index = wishlist.indexOf(id);

      if (index === -1) {
        wishlist.push(id);
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid", "text-danger");
      } else {
        wishlist.splice(index, 1);
        icon.classList.remove("fa-solid", "text-danger");
        icon.classList.add("fa-regular");
      }

      saveWishlistForUser(wishlist);
    });
  });
}

renderProducts();
