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

function resetPassword() {
  document.querySelector("#model").style.display = "block"
  document.querySelector(".reset").style.display = "none"
}

function closeBnt() {
  document.getElementById("model").style.display = "none";
  document.querySelector(".reset").style.display = "block"
}

function savePassword(event) {
  event.preventDefault();
  let curruntPassword = document.querySelector('#curruntPassword').value;
  let newPassword = document.querySelector('#password').value;
  let registerData = JSON.parse(localStorage.getItem("register"));
  let logindata = JSON.parse(localStorage.getItem("login"));
  if (!curruntPassword || !newPassword) {
    alert("Enter all details");
    return;
  }

  let update = registerData.find((item) => item.password == logindata.password)
  if(update === undefined){
    alert("password not match")
  }
  if (update.password === curruntPassword) {
    update.password = newPassword;
  } else {
    alert("currunt password not match password not match")
    return
  }
  localStorage.setItem("register", JSON.stringify(registerData));
  document.querySelector('#curruntPassword').value = ""
  document.querySelector('#password').value = ""
  document.querySelector("#model").style.display = "none"
  document.querySelector(".reset").style.display = "block"
  logoutUser()
}

userDisplay();