const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const allUsers = JSON.parse(localStorage.getItem("userData")) || [];
const wishlistContainer = document.querySelector(".wishlist");
const products = JSON.parse(localStorage.getItem("products")) || [];


function getWishlistForUser() {
  if (!currentUser) return [];
  const user = allUsers.find(u => u.id === currentUser.id);
  return user?.wishList || [];
}

function saveWishlistForUser(wishlistIds) {
  if (!currentUser) return;
  const index = allUsers.findIndex(user => user.id === currentUser.id);
  if (index !== -1) {
    allUsers[index].wishList = wishlistIds;
    localStorage.setItem("userData", JSON.stringify(allUsers));
    localStorage.setItem("currentUser", JSON.stringify(allUsers[index]));
  }
}

function renderWishlist() {
  const wishlistIds = getWishlistForUser();
  wishlistContainer.innerHTML = "";

  if (wishlistIds.length === 0) {
    wishlistContainer.innerHTML = "<p class='text-center'>Your wishlist is empty.</p>";
    return;
  }

  wishlistIds.forEach(id => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const itemDiv = document.createElement("div");
    itemDiv.className = "wishlist-item card p-3 mb-3";
    itemDiv.setAttribute("data-id", product.id);
    itemDiv.innerHTML = `
      <div class="row">
        <div class="col-md-3">
          <img src="${product.image}" class="img-fluid" alt="${product.title}">
        </div>
        <div class="col-md-7">
          <h5>${product.title}</h5>
          <p>${product.category}</p>
          <p>$${product.price}</p>
        </div>
        <div class="col-md-2 d-flex align-items-center">
          <button class="btn btn-danger remove-from-wishlist">Remove</button>
        </div>
      </div>
    `;

    // Remove düyməsi üçün listener
    itemDiv.querySelector(".remove-from-wishlist").addEventListener("click", () => {
      removeFromWishlist(product.id);
    });

    wishlistContainer.appendChild(itemDiv);
  });

  updateWishlistCount();
}

function removeFromWishlist(productId) {
  let wishlist = getWishlistForUser();
  const index = wishlist.indexOf(productId);
  if (index !== -1) {
    wishlist.splice(index, 1);
    saveWishlistForUser(wishlist);
    renderWishlist();
  }
}

function updateWishlistCount() {
  const countElement = document.querySelector(".wishlist-count");
  if (countElement) {
    const wishlist = getWishlistForUser();
    countElement.textContent = wishlist.length;
  }
}

renderWishlist();
