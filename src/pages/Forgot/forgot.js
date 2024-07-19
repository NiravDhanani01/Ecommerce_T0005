let isemail = false;
let ispassword = false;
let userData = JSON.parse(localStorage.getItem("register"))
document.querySelector(".emilvalidator").style.display = "block"
document.querySelector(".OtpValidator").style.display = "none"
document.querySelector(".NewPassword").style.display = "none"
document.querySelector(".ConfirmNewpassword").style.display = "none"
var otp = Math.floor(Math.random() * 10000);
console.log(otp);

let data = []
function LoginUser(event) {
    event.preventDefault();
    let email = document.querySelector("#email").value
    
    emailChecker();

    let validUser = userData.some((item) => {
        return item.email === email
    })
    console.log(validUser);
    if (validUser == true) {
        alert(`Your Otp is`,otp)
        document.querySelector(".emilvalidator").style.display = "none"
        document.querySelector(".OtpValidator").style.display = "block"
        document.querySelector(".NewPassword").style.display = "none"
        document.querySelector(".ConfirmNewpassword").style.display = "none"
    } 
    else {
        alert("Enter Correct Email")
    }
}

function otpchecker(event){
    event.preventDefault();
    let userOtp = document.querySelector("#otp")
    if (otp == userOtp) {
        document.querySelector(".emilvalidator").style.display = "none"
        document.querySelector(".OtpValidator").style.display = "none"
        document.querySelector(".NewPassword").style.display = "block"
        document.querySelector(".ConfirmNewpassword").style.display = "block"
    } 
    else {
        alert("Enter Correct Email")
    }
}

function PassworSetter(event){
    event.preventDefault();
console.log("done");
}

function emailChecker() {
    let email = document.querySelector("#email").value;
    let error = document.querySelector("#emailError");
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
        error.innerText = "Enter Valid Email Address";
        isemail = false;
    } else {
        error.innerText = "";
        isemail = true;
    }
}


function passwordChecker() {
    let password = document.querySelector("#password").value;
    let passwordError = document.querySelector("#passwordError")
    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/
    if (!regex.test(password)) {
      passwordError.innerText = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-15 characters long."
      ispassword = false;
    } else {
      passwordError.innerText = "";
      ispassword = true;
    }
  }
  
  function CpasswordCheker() {
    let password = document.querySelector("#password").value;
    let Cpassword = document.querySelector("#Cpassword").value;
    let CpasswordError = document.querySelector("#CpasswordError")
    if (password !== Cpassword) {
      CpasswordError.innerText = "password not match"
      isConfirmPassword = false;
    } else {
      CpasswordError.innerText = "";
      isConfirmPassword = true;
    }
  }