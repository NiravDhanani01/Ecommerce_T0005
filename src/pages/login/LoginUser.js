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


var googleUser = {};

const startApp = () => {
  gapi.load('auth2', function(){

    auth2 = gapi.auth2.init({
      client_id: `228616649849-c42i212n1ioc4ks2dg8djr8qad0tpru0.apps.googleusercontent.com`,
      cookiepolicy: 'single_host_origin',
      scope : ""
  
    });
    attachSignin(document.getElementById('googleAuth_Btn'));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        alert(`Signed in : ${googleUser.getBasicProfile().getName()}`) 
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}

startApp()