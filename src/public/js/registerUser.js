let isname = false;
let isemail = false;

function registrationForm(event) {
  event.preventDefault();
  nameChecker();
  emailChecker();
}

function nameChecker() {
  let name = document.querySelector("#name").value;
  let error = document.querySelector("#nameError");
  let regex = /^[a-zA-Z\s]+$/;

  if (name.length < 2) {
    error.innerText = "Name should be at least 2 characters";
    isname = false;
  } else if (!regex.test(name)) {
    error.innerText = "Numbers and special characters are not allowed";
    isname = false;
  } else {
    error.innerText = "";
    isname = true;
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
