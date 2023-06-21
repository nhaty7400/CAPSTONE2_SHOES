const validation = new Validation();

const checkValid = () => {
  let email = document.getElementById("cyberEmail").value;
  let name = document.getElementById("cyberName").value;
  let phone = document.getElementById("cyberPhone").value;
  let password = document.getElementById("cyberPass").value;
  let confirmPassword = document.getElementById("cyberConfirmPass").value;
  let gender = true;

  let isValid = true;

  isValid &=
    validation.checkEmpty(email, "spanEmail", "Please input email") &&
    validation.checkEmail(
      email,
      "spanEmail",
      "Email address is not valid. Please try again Ex:example@gmail.com"
    );
  isValid &=
    validation.checkEmpty(name, "spanName", "Please input name") &&
    validation.checkName(
      name,
      "spanName",
      "Name must contain only alphanumeric characters. Please try again Ex:Thomas John"
    );
  isValid &=
    validation.checkEmpty(phone, "spanPhone", "Please input phone number") &&
    validation.checkPhone(
      phone,
      "spanPhone",
      "Phone number must contain from 9 to 10 numbers"
    );
  isValid &=
    validation.checkEmpty(password, "spanPass", "Please input password") &&
    validation.checkPassword(
      password,
      "spanPass",
      "Password must contain from 6 to 10 characters, must have at least 1 number, 1 special character, 1 lowercase alphanumeric character and 1 uppercase alphanumeric character"
    );
  isValid &=
    validation.checkEmpty(
      confirmPassword,
      "spanConfirmPass",
      "Please input confirm password"
    ) &&
    validation.checkConfirmPassword(
      password,
      confirmPassword,
      "spanConfirmPass",
      "Password and confirm password must be the same. Please try again"
    );

    userArray=[];


  isValid &= validation.checkRadioIsChecked();

  if (isValid) {

    if (document.getElementById("male").checked) {
      gender = true;
    }
    if (document.getElementById("female").checked) {
      gender = false;
    }

    const account = {
      email: email,
      password: password,
      name: name,
      gender: gender,
      phone: phone,
    };

    axios({
      method: "post",
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      data: account,
    })
      .then(function (result) {
        let storagedAccount={
          email: email,
          name: name
        };
        userArray.push(storagedAccount);
        localStorage.setItem("userArray", JSON.stringify(userArray));
        alert(result.data.message);
        resetForm();
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  }
};

document.getElementById("sign-un-btn").addEventListener("click", (event) => {
  event.preventDefault();
  checkValid();
});

function resetForm() {
  document.getElementById("formRegister").reset();
}