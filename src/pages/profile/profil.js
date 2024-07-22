function GotoCart() {
  let loginData = JSON.parse(localStorage.getItem("login"));

  if (!loginData) {
    alert("User Not Valid, First Sign in");
    return;
  } else {
    location.href = "../Cart/cart.html";
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

checkUserStatus();

function updateCartQty() {
  let cartData = JSON.parse(localStorage.getItem("cart"));
  if (
    localStorage.getItem("cart") == null ||
    localStorage.getItem("cart") == undefined
  ) {
    document.querySelector("#updateQty").innerHTML = 0;
  } else {
    document.querySelector("#updateQty").innerHTML = cartData.length;
  }
}
updateCartQty();

function LogoutUser() {
  localStorage.removeItem("login");
  location.href = "../../../index.html";
}

function toggleNavBar() {
  var SmallMenu = document.getElementById("smallMenu");
  SmallMenu.classList.toggle("showSmallMenu");
}

function userDisplay() {
  let logindata = JSON.parse(localStorage.getItem("login"));
  let registerData = JSON.parse(localStorage.getItem("register"));
  let billingData = JSON.parse(localStorage.getItem("billing"));


  if (logindata && registerData) {
    const currentUser = registerData.find(user => user.email === logindata.email);

    if (currentUser) {
      document.querySelector("#user").innerText = `Name: ${currentUser.name}`;
      document.querySelector("#userEmail").innerText = `Email: ${currentUser.email}`;
      document.querySelector("#userPassword").innerText = `Password: ${currentUser.password}`;
    }

    if (billingData) {
      document.querySelector("#userContact").innerText = `Contact No: ${billingData.contact}`;
      document.querySelector("#userAddress").innerText = `Address: ${billingData.address}`;
      document.querySelector("#pincode").innerText = `Pin Code: ${billingData.pincode}`;
    }
  }
}
userDisplay();

function resetPassword() {
  document.querySelector("#model").style.display = "block"
  document.querySelector(".reset").style.display = "none"
}


function closebnt() {
  document.getElementById("model").style.display = "none";
  document.querySelector(".reset").style.display = "block"
}

let ispassword = false;

function SavePassword(event) {
  event.preventDefault();
  let currentPassword = document.querySelector('#curruntPassword').value;
  let newPassword = document.querySelector('#NewPassword').value;
  let registerData = JSON.parse(localStorage.getItem("register"));
  let logindata = JSON.parse(localStorage.getItem("login"));
  if (!currentPassword || !newPassword) {
    alert("Enter all details");
    return;
  }
  passwordChecker()

  let update = registerData.find((item) => item.password == logindata.password)
  if (update.password == currentPassword) {
    update.password = newPassword;
  } else {
    alert("password not match")
    return
  }
  localStorage.setItem("register", JSON.stringify(registerData));
  document.querySelector('#curruntPassword').value = ""
  document.querySelector('#NewPassword').value = ""
  document.querySelector("#model").style.display = "none"
  document.querySelector(".reset").style.display = "block"
  userDisplay()
}

function passwordChecker() {
  let newPassword = document.querySelector('#NewPassword').value;
  let passwordError = document.querySelector("#passwordError");
  let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;
  if (!regex.test(newPassword)) {
    passwordError.innerText =
      "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-15 characters long.";
    ispassword = false;
  } else {
    passwordError.innerText = "";
    ispassword = true;
  }
}