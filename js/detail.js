window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");

  function getProduct() {
    axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
    })
      .then(function (result) {
        renderProduct(result.data.content);
        renderSizeBtn(result.data.content.size);
        renderListRelatedProducts(result.data.content.relatedProducts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getProduct();

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
          <div class="quantity-btn d-flex mt-3">
              <button class="minus-btn" onclick="handleMinus()"><svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
              </button>
              <input type="text" name="amount" id="amount" value="1">
              <button class="plus-btn" onclick="handlePlus()"><svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
              </button>
          </div>
          <button class="cybershoes-carousel-btn my-5">Add to cart</button>
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
