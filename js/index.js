function getAllProduct() {
  axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product",
  })
    .then(function (result) {
      renderListProduct(result.data.content);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getAllProduct();



const renderListProduct = (listProduct) => {
  const productBox = document.getElementById("cybershoes-product-content");

  const content = listProduct.map((product) => {
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
          <a href="./pages/detail.html?productid=${id}" class="cybershoes-card-btn">View detail</a>
        </div>
      </div>
    </div>
  </div>
        `;
  });

  productBox.innerHTML = content.join("");
};
