const cartList = new CartList();

const setLocalStorage = () => {
  localStorage.setItem("cartList", JSON.stringify(cartList.itemArray));
};

function addToCart() {
  cartList.itemArray = JSON.parse(localStorage.getItem("cartList"));
  if (cartList.itemArray == null) {
    cartList.itemArray = [];
  }
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");

  axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
  })
    .then(function (result) {
      let itemData = result.data.content;
      return itemData;
    })
    .catch(function (error) {
      console.log(error);
    });

  setTimeout(() => {
    let id = itemData.id;
    let img = itemData.image;
    let name = itemData.name;
    let price = itemData.price;
    let quantityOrder = 1;

    const item = new CartItem(id, img, name, price, quantityOrder);

    if (cartList.isExist(id) === false) {
      cartList.add(item);
      alert("Add new item to cart success");
    } else {
      cartList.quantityUp(item);
      alert("Add item to cart success");
    }

    setLocalStorage();
  }, 1000);
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");

  axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
  })
    .then(function (result) {
      renderProduct(result.data.content);
      renderSizeBtn(result.data.content.size);
      renderListRelatedProducts(result.data.content.relatedProducts);
      itemData = result.data.content;
    })
    .catch(function (error) {
      console.log(error);
    });

  // renderProduct feature

  const renderProduct = (product) => {
    const productBox = document.getElementById("product-detail");

    const { image, name, price, description } = product;

    const content = `
          <div class="col-12 col-md-6">
          <img class="img-fluid" src="${image}" alt="">
      </div>
      <div class="col-12 col-md-6">
          <div class="detail-text">
              <h1 class="my-3">${name}</h1>
              <h2 class="mb-3">$${price}.00</h2>
              <p class="my-2">${description}</p>
          </div>
          <div class="detail-size mt-4">
              <h2 class="mb-3">Available Size</h2>
              <div class="size-btn-group">
              </div>
          </div>
          <button class="cybershoes-carousel-btn my-5" id="addToCart5" onclick="addToCart()">Add to cart</button>
      </div>
              `;

    productBox.innerHTML = content;
  };

  // renderSizeBtn feature
  const renderSizeBtn = (listSize) => {
    const sizeBox = document.querySelector("#product-detail .size-btn-group");

    const content = listSize.map((size) => {
      return `
      <button class="size-btn">${size}</button>
              `;
    });

    sizeBox.innerHTML = content.join("");
  };

  // renderListRelatedProducts feature
  const renderListRelatedProducts = (relatedProducts) => {
    const productBox = document.getElementById("cybershoes-related-product");

    const content = relatedProducts.map((product) => {
      const { image, name, price, id } = product;
      return `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card cybershoes-card">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body px-2">
        <h5 class="card-title">${name}</h5>
        <div class="card-rate mb-3">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="d-flex justify-content-between">
          <h5 class="card-price">$${price}.00</h5>
          <a href="./detail.html?productid=${id}" class="cybershoes-card-btn">View detail</a>
        </div>
      </div>
    </div>
  </div>
        `;
    });

    productBox.innerHTML = content.join("");
  };
};
