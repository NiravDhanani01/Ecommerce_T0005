async function displayProducts(
  filterCat = null,
  sort = "default",
  search = null 
) {
  try {
    let res = await fetch("../../public/js/data.json");
    let data = await res.json();

    switch (sort) {
      case "price-low":
        data = data.sort((a, b) => a.offerPrice - b.offerPrice);
        break;
      case "price-high":
        data = data.sort((a, b) => b.offerPrice - a.offerPrice);
        break;
      case "name-atoz":
        data = data.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-ztoa":
        data = data.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    let productCard = document.querySelector("#productCard");
    productCard.innerHTML = "";

    let filteredData = filterCat
      ? data.filter((item) => item.category === filterCat)
      : data;

    filteredData.map((item) => {
      productCard.innerHTML += `
              <div class="product-card wow animate__bounceIn" data-wow-duration="1s" id="${item.id}">
                  <div class="product-img">
                      <img src="${item.img}" alt="">
                  </div>
                  <div class="product-content">
                      <h4 class="productName">${item.name}</h4>
                      <p class="offerPrice">${item.offerPrice} &#8377; <span class="mainPrice">${item.price} &#8377;</span></p>
                      <div class="d-flex justify-between">
                          <p class="weight">${item.weight}</p>
                          <p class="cat">${item.category}</p>
                      </div>
                      <div class="d-flex justify-center">
                          <button class="cartBtn" onclick="addToCart(${item.id})">Add To Cart</button>
                      </div>
                  </div>
              </div>
          `;
    });
  } catch (err) {
    console.error("Failed to fetch products:", err.message);
  }
}

async function addToCart(id) {
  try {
    let response = await fetch("../../public/js/data.json");
    let data = await response.json();
    let selectedData = data.find((item) => item.id === id);
    if (!selectedData) return;

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let storedItem = cartData.find((item) => item.id === id);

    if (storedItem) {
      storedItem.qty += 1;
    } else {
      selectedData.qty = 1;
      cartData.push(selectedData);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));

  } catch (err) {
    console.error("Failed to add to cart:", err.message);
  }
  updateCartQty()
}

function categoryFilter(category) {
  displayProducts(category);
}

function clearFilter() {
  displayProducts();
}

function sortProducts() {
  let sort = document.querySelector("#sort").value;
  displayProducts(null, sort);
}

function searchCategory() {
  let search = document.querySelector("#search").value;
  displayProducts(null, "default", search);
}

displayProducts();