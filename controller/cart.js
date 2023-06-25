


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
                                <input type="text" name="amount" id="amount" value="${item.quantityOrder}">
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
                            <button class="btn btn-danger" onclick="deleteItem(${item.id})">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
        `;
  });

  cartBox.innerHTML = content.join("");
};


const getLocalStorage = () => {
  let dataLocal = JSON.parse(localStorage.getItem("cartList"));

  if (dataLocal !== null) {
    renderCartList(dataLocal);
  }
};
getLocalStorage();








