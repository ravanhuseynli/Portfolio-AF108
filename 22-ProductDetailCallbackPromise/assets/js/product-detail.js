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
        ]);
      }, 500);
    });
  }
  
  const container = document.querySelector(".product-container");
  
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  
  fetchProducts().then(products => {
    const product = products.find(p => p.id === id);
  
    if (!product) {
      container.innerHTML = "<p>Product not found</p>";
      return;
    }
  
    container.innerHTML = `
      <div class="col-md-6 offset-md-3">
        <div class="card p-3">
          <img src="${product.image}" class="img-fluid mb-3" alt="${product.title}" />
          <h2>${product.title}</h2>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <p><strong>Description:</strong> ${product.description}</p>
          <p><strong>Rating:</strong> ⭐ ${product.rating.rate} (${product.rating.count} reviews)</p>
          <button class="btn btn-success" id="addToBasket">Add to Basket</button>
        </div>
      </div>
    `;
  
    document.getElementById("addToBasket").addEventListener("click", () => {
      let basket = JSON.parse(localStorage.getItem("basket")) || [];
      const existing = basket.find(p => p.id === product.id);
      if (existing) {
        existing.count += 1;
      } else {
        basket.push({ ...product, count: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(basket));
  
      Toastify({
        text: "Product added to basket",
        style: { background: "green" },
        duration: 2000,
      }).showToast();
    });
  });
  