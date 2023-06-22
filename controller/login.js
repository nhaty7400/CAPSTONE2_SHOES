const signIn = () => {
  let email = document.getElementById("cyberEmail").value;
  let password = document.getElementById("cyberPass").value;

  let account = {
    email: email,
    password: password,
  };

  axios({
    method: "post",
    url: "https://shop.cyberlearn.vn/api/Users/signin",
    data: account,
  })
    .then(function (result) {
      alert(result.data.message);
      localStorage.setItem("token", JSON.stringify(result.data.content.accessToken));
      // set vào local thì phải stringify trước nha
      window.location = "/index.html";
      // và kiểm tra lại hàm này giúp mình
      // và khi code nên xem log để dễ xác định lỗi nha.
    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
};


// Run sign in feature when click button Sign in
document.getElementById("signInBtn").addEventListener("click", (event) => {
  event.preventDefault();
  signIn();
});

