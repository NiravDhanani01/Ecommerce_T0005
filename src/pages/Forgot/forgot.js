let userData = JSON.parse(localStorage.getItem("register"));
document.querySelector(".emilvalidator").style.display = "block";
document.querySelector(".OtpValidator").style.display = "none";
document.querySelector(".NewPassword").style.display = "none";

var otp = Math.floor(Math.random() * 10000);

function emailVerification(event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let validUser = userData.some((item) => {
    return item.email === email;
  });

  if (validUser == true) {
    document.querySelector(".emilvalidator").style.display = "none";
    document.querySelector(".OtpValidator").style.display = "block";
    document.querySelector(".NewPassword").style.display = "none";
    alert(`Your otp is : ${otp}`);
  } else {
    alert("Enter Correct Email");
  }
}

function otpchecker(event) {
  event.preventDefault();
  let userOtp = document.querySelector("#otp").value;

  if (otp == userOtp) {
    document.querySelector(".emilvalidator").style.display = "none";
    document.querySelector(".OtpValidator").style.display = "none";
    document.querySelector(".NewPassword").style.display = "block";
  } else {
    alert("Enter Correct Otp");
  }
}

function passwordSetter(event) {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let newpassword = document.querySelector("#password").value;

  if (!newpassword || !email) {
    alert("Enter all details");
    return;
  }

  if (ispassword) {
    let updatedData = userData.map((user) => {
      if (user.email === email) {
        return { ...user, password: newpassword };
      }
      return user;
    });

    localStorage.setItem("register", JSON.stringify(updatedData));
    alert("Password updated successfully!");
    window.location.href = "../login/login.html";
  } else {
    alert("Please ensure all validations are correct");
  }
}
