const validation = new Validation();

const checkValid = () => {
  let email = document.getElementById("cyberEmail").value;
  let name = document.getElementById("cyberName").value;
  let phone = document.getElementById("cyberPhone").value;
  let password = document.getElementById("cyberPass").value;
  let confirmPassword = document.getElementById("cyberConfirmPass").value;
  let gender=true;
  
  let isValid=true;

  isValid &= validation.checkEmpty(email,"spanEmail","Please input email") && validation.checkEmail(email,"spanEmail","Email address is not valid. Please try again Ex:example@gmail.com");
  isValid &= validation.checkEmpty(name,"spanName","Please input name") && validation.checkName(name,"spanName","Name must contain only alphanumeric characters. Please try again Ex:Thomas John");
  isValid &= validation.checkEmpty(phone,"spanPhone","Please input phone number") && validation.checkPhone(phone,"spanPhone","Phone number must contain from 9 to 10 numbers");
  isValid &= validation.checkEmpty(password,"spanPass","Please input password") && validation.checkPassword(password,"spanPass","Password must contain from 6 to 10 characters, must have at least 1 number, 1 special character, 1 lowercase alphanumeric character and 1 uppercase alphanumeric character");
  isValid &= validation.checkEmpty(confirmPassword,"spanConfirmPass","Please input confirm password") && validation.checkConfirmPassword(password,confirmPassword,"spanConfirmPass","Password and confirm password must be the same. Please try again");
  isValid &= validation.checkRadioIsChecked(spanGender,"Please choose your gender");

  if(isValid){
    
  }
  
};
