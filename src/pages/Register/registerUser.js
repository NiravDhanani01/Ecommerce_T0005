let data = []
function registrationForm(event) {
  event.preventDefault();

  nameChecker();
  emailChecker();
  passwordChecker();
  CpasswordCheker();
  let name = document.querySelector("#name").value
  let email = document.querySelector("#email").value
  let password = document.querySelector("#password").value

  if (isname == true && isemail == true && ispassword == true && isConfirmPassword == true) {
    let obj = {
      name, email, password
    }
    if (localStorage.getItem("register") == null || localStorage.getItem("register") == undefined) {
      data.push(obj)
      localStorage.setItem("register", JSON.stringify(data))
    } else {
      let allusers = JSON.parse(localStorage.getItem("register"))
      allusers.push(obj)
      localStorage.setItem("register", JSON.stringify(allusers))
    }
    location.href = "../login/login.html"
  } else {
    alert("All Field Require")
  }
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#Cpassword").value = "";
}
