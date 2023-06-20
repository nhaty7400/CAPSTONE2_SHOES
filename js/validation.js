function Validation() {
  this.checkEmpty = function (value, spanID, message) {
    if (value === "") {
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
    }
    document.getElementById(spanID).innerHTML = "";
    document.getElementById(spanID).style.display = "none";
    return true;
  };

  this.checkRadioIsChecked = function () {
    let male = document.getElementById("male");
    let female=document.getElementById("female");

    if (male.checked || female.checked) {
      return true;
    }

    alert("Please choose your gender");
    return false;
  };

  this.checkName = function (value, spanID, message) {
    var pattern =
      /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
    if (value.match(pattern)) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";

      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";

    return false;
  };

  this.checkEmail = function (value, spanID, message) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(pattern)) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";

      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";

    return false;
  };

  this.checkPhone = function (value, spanID, message) {
    var pattern = /^[0-9]+$/;
    if (value.match(pattern) && value.length >= 9 && value.length <= 10) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";

      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";

    return false;
  };

  this.checkPassword = function (value, spanID, message) {
    var pattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,10})/g;
    if (value.match(pattern) && value.length >= 6 && value.length <= 10) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";

      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";

    return false;
  };

  this.checkConfirmPassword = function (value1, value2, spanID, message) {
    if (value1 === value2) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";

      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";

    return false;
  };
}
