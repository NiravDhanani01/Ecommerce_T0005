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

function formUpdator(event) {
  event.preventDefault();
  let registerData = JSON.parse(localStorage.getItem("register"));
  let billingData = JSON.parse(localStorage.getItem("billing"));

  const inputName = document.querySelector("#inputName").value;
  if (inputName) {
    registerData.map((item) => {
      item.name = inputName;
    });
    localStorage.setItem("register", JSON.stringify(registerData));
    document.querySelector("#user").innerText = `Name: ${inputName}`;
  }
}

function UpdateDate() {
  document.querySelector(".update").style.display = "block";
  document.querySelector(".static").style.display = "none";
}


