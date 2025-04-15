let basket = JSON.parse(localStorage.getItem("basket")) || [];
const basketContainer = document.querySelector(".basket");
const totalPriceElement = document.querySelector(".total-price");

function renderBasket() {
  basketContainer.innerHTML = "";

  if (basket.length === 0) {
    basketContainer.innerHTML = "<p>Your basket is empty.</p>";
    totalPriceElement.textContent = "0";
    return;
  }

  basket.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "basket-item";
    itemDiv.innerHTML = `
      <div class="image">
        <img src="${item.image}" alt="Product Image" />
      </div>
      <h6 class="title">${item.title}</h6>
      <p class="category">${item.category}</p>
      <p class="price">$${item.price}</p>
      <div class="count-area">
        <button class="minus-btn" ${item.count === 1 ? "disabled" : ""}>-</button>
        <p class="count">${item.count}</p>
        <button class="plus-btn">+</button>
      </div>
      <button class="btn btn-danger remove-btn">Remove</button>
    `;

    itemDiv.querySelector(".minus-btn").addEventListener("click", () => {
      if (item.count > 1) {
        item.count--;
        updateBasket();
      }
    });

    itemDiv.querySelector(".plus-btn").addEventListener("click", () => {
      item.count++;
      updateBasket();
    });

    itemDiv.querySelector(".remove-btn").addEventListener("click", () => {
      basket.splice(index, 1);
      updateBasket();
    });

    basketContainer.appendChild(itemDiv);
  });

  updateTotalPrice();
}

function updateTotalPrice() {
  const total = basket.reduce((sum, item) => sum + item.price * item.count, 0);
  totalPriceElement.textContent = total.toFixed(2);
}

function updateBasket() {
  localStorage.setItem("basket", JSON.stringify(basket));
  renderBasket();
}

const clearBtn = document.createElement("button");
clearBtn.className = "btn btn-warning mt-3";
clearBtn.textContent = "Clear Basket";
document.querySelector(".bottom").appendChild(clearBtn);

clearBtn.addEventListener("click", () => {
  basket = [];
  localStorage.removeItem("basket");
  renderBasket();
  Toastify({
    text: "Basket cleared",
    duration: 2000,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
    },
  }).showToast();
});

renderBasket();
