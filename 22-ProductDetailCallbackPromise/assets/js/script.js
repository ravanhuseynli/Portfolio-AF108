// Məhsulları Promise ilə al
function fetchProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Fjallraven Backpack",
            price: 109.95,
            description: "Perfect for everyday use and walks.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: { rate: 3.9, count: 120 },
          },
          {
            id: 2,
            title: "Men's T-Shirt",
            price: 22.3,
            description: "Slim-fit cotton T-shirt.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: { rate: 4.1, count: 259 },
          },
          // İstəsən əlavə məhsul əlavə et
        ]);
      }, 500); // 500ms gecikmə simulyasiyası
    });
  }
  
  const cardsContainer = document.querySelector(".cards");
  
  fetchProducts().then(products => {
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "card col-md-4";
      div.innerHTML = `
        <div class="card-image">
          <img src="${product.image}" alt="${product.title}" />
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
            <a class="btn btn-primary mt-2" href="product-detail.html?id=${product.id}">View Detail</a>
          </div>
        </div>
      `;
      cardsContainer.appendChild(div);
    });
  });
  