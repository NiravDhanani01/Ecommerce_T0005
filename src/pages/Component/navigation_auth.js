let isname = false;
let isemail = false;
let isNumberValid = false;
let ispincode = false
let ispassword = false;
let isConfirmPassword = false;

function gotoUserProfile() {
    if (localStorage.getItem('login') == null || localStorage.getItem('login') == undefined) {
        alert("invalid User,login First")
    } else {
        location.href = "../profile/profile.html"
    }
}

function updateCartQty() {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    if (localStorage.getItem("cart") == null || localStorage.getItem("cart") == undefined) {
        document.querySelector("#updateQty").innerHTML = 0
        document.querySelector("#smallupdateQty").innerHTML = 0
    } else {
        document.querySelector("#updateQty").innerHTML = cartData.length
        document.querySelector("#smallupdateQty").innerHTML = cartData.length
    }
}

function checkUserStatus() {
    let loginData = JSON.parse(localStorage.getItem("login"));

    if (!loginData) {
        document.querySelector("#logout").style.display = "none";
        document.querySelector("#smalllogout").style.display = "none";
    } else {
        document.querySelector("#userName").innerText = `Welcome ${loginData.name}`;
        document.querySelector(
            "#smalluserName"
        ).innerText = `Welcome ${loginData.name}`;
        document.querySelector("#loginUser").style.display = "none";
        document.querySelector("#smallloginUser").style.display = "none";
    }
}

function toggleNavBar() {
    var SmallMenu = document.getElementById("smallMenu");
    if (SmallMenu.classList.contains("showSmallMenu")) {
        SmallMenu.classList.remove("showSmallMenu");
    } else {
        SmallMenu.classList.add("showSmallMenu");
    }
}

function gotoCart() {
    let loginData = JSON.parse(localStorage.getItem("login"));

    if (!loginData) {
        alert("User Not Valid, First Sign in");
        return;
    } else {
        location.href = "../Cart/cart.html";
    }
}

function logoutUser() {
    localStorage.removeItem("login");
    location.href = "../../../index.html";
}

function nameChecker() {
    let name = document.querySelector("#name").value;
    let error = document.querySelector("#nameError");
    let regex = /^[a-zA-Z\s]+$/;

    if (name.length < 3) {
        error.innerText = "Name should be at least 3 characters";
        isname = false;
    } else if (!regex.test(name)) {
        error.innerText = "Numbers and special characters are not allowed";
        isname = false;
    } else {
        error.innerText = "";
        isname = true;
        return name
    }
}

function numberChecker() {
    let contact = document.querySelector("#contact").value;
    let error = document.querySelector("#contactError");
    let regex = /^\d{10}$/;

    if (!regex.test(contact)) {
        error.innerText = "Contact Number must be 10 digits";
        isNumberValid = false;
    } else {
        error.innerText = "";
        isNumberValid = true;
    }
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

function pinCheker() {
    let pincode = document.querySelector("#pincode").value;
    let pinerror = document.querySelector("#pinerror");
    let regex = /^[1-9][0-9]{5}$/;

    if (!regex.test(pincode)) {
        pinerror.innerHTML = `pin must be 6 character`
        ispincode = false
    } else {
        pinerror.innerHTML = ""
        ispincode = true
    }
}

updateCartQty();
checkUserStatus();
