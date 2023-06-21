// Check if user has signed in
let token=localStorage.getItem("token");

if (typeof token === "string") {
  document.getElementById("isNotLogIn").style.display = "none";
  document.getElementById("isLogIn").style.display = "flex";
}

// LogOut feature
const logOut = () => {
  localStorage.removeItem("token");
  document.getElementById("isLogIn").style.display = "none";
  document.getElementById("isNotLogIn").style.display = "flex";
};
document.getElementById("logOut").addEventListener("click", (event)=>{
    event.preventDefault();
    logOut();
});

