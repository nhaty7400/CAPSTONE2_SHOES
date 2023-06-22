const cartList = new CartList();

// localStorage functions
const setLocalStorage = () => {
  localStorage.setItem("cartList", JSON.stringify(cartList.itemArray));
};

const getLocalStorage = () => {
  let dataLocal = JSON.parse(localStorage.getItem("cartList"));
  console.log(dataLocal);

  if (dataLocal !== null) {
    renderCartList(dataLocal);
    cartList.itemArray = dataLocal;
  }
};

getLocalStorage();

// cart related functions
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");

  axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
  })
    .then(function (result) {
      console.log(result);
      const addToCart = () => {
        let id = result.data.content.id;
        let img = result.data.content.image;
        let name = result.data.content.name;
        let price = result.data.content.price;
        let quantityOrder = 1;

        let item = CartItem(id, img, name, price, quantityOrder);
        console.log(item);
        if (cartList.isExist(item.id) === false) {
          cartList.addToCart(item);
          alert("Add new item to cart success");
        } else {
          cartList.quantityUp(item);
          alert("Add item to cart success");
        }

        setLocalStorage();
        renderCartList(cartList.itemArray);
      };
      document.getElementById("addToCart").addEventListener("click", addToCart);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const renderCartList = (array) => {
  let cartBox = document.getElementById("tbodyCart");

  const content = array.map((item) => {
    return `
        <tr class="">
                        <th scope="row">
                            <img class="img-fluid" src="${item.img}" alt="">
                        </th>
                        <td>${item.name}</td>
                        <td class="">
                            <div class="quantity-btn d-flex d-flex justify-content-center align-items-center">
                                <button class="minus-btn" onclick="handleMinus()"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </button>
                                <input type="text" name="amount" id="amount" value="'${item.quantityOrder}'">
                                <button class="plus-btn" onclick="handlePlus()"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td>$${item.price}.00</td>
                        <td>
                            <button class="btn btn-danger" onclick="deleteItem('${item.id}')">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
        `;
  });

  cartBox.innerHTML = content.join("");
};
