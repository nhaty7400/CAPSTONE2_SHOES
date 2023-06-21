const signIn = () => {
  let email = document.getElementById("cyberEmail").value;
  let password = document.getElementById("cyberPass").value;

  let account = {
    email: email,
    password: password,
  };

  const helloUser = () => {
    let accountList = JSON.parse(localStorage.getItem("userArray"));
    let name = "";
    accountList.forEach(account => {
        if(account.email==email){
            name=account.name;
        }
    });
    if (name !=""){
        document.getElementById("helloUserName").innerHTML=name;
    }
  };

  axios({
    method: "post",
    url: "https://shop.cyberlearn.vn/api/Users/signin",
    data: account,
  })
    .then(function (result) {
      alert(result.data.message);
      localStorage.setItem("token", result.data.content.accessToken);
      helloUser();
      window.location.href="https://www.google.com.vn/"
      
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


