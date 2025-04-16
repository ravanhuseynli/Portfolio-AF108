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

async function fetchAndRenderProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    renderProducts(products);
  } catch (error) {
    console.error("Məhsulları əldə etmək mümkün olmadı:", error);
  }
}

function renderProducts(products) {
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
        </div>
      </div>
    `;
    productsElement.appendChild(productElement);
  });

  attachWishlistListeners();
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

fetchAndRenderProducts();
