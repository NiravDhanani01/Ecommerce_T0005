let userData = JSON.parse(localStorage.getItem("register"))

let data = []
function LoginUser(event) {
    event.preventDefault();
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let loginError = document.querySelector("#loginError")

    emailChecker();
    passwordChecker();

 if(localStorage.getItem("register") == null || localStorage.getItem("register") == undefined){
    loginError.innerHTML = "User Not Register,please Register First"
} else{
     loginError.innerHTML = ""
 }

    let validUser = userData.find((item)=>{
        return item.email === email && item.password === password
    })
  
    if (isemail == true && ispassword == true) {
       if(validUser){
        localStorage.setItem("login",JSON.stringify(validUser))
        loginError.innerText = ""
        location.href ="../../../index.html"
    } else {
        loginError.innerText = "Email or password may wrong"
       }
    } else {
        alert("All Field Require")
    }
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
}
