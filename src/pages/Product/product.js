
async function DispalyProduct() {
    try {
        let res = await fetch("./src/public/js/data.json");
        let data = await res.json()
        let record = data.slice(0, 8)

        record.map((item) => {
            document.querySelector("#productCard").innerHTML += `
              <div class="product-card" id="${item.id}">
                    <div class="product-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="product-content">
                        <h4 class="productName">${item.name}</h4>
                        <p class="offerPrice">${item.offerPrice} &#8377; <span class="mainPrice">${item.price} &#8377;</span></p>
                        <div class="d-flex justify-between">
                            <p class="weight">${item.weight} </p> 
                            <p class="cat">${item.category}</p>
                        </div>
                       <div class="d-flex justify-center">
                            <button class="cartBtn" onclick="AddtoCart(${item.id})">Add To Cart</button>
                       </div>
                    </div>
              </div>    
        `
        })


        if(localStorage.getItem("login") == null || localStorage.getItem("login") == undefined){
            document.querySelector("#logout").style.display = "none"
        } else{
            let login = JSON.parse(localStorage.getItem("login"))
            document.querySelector("#userName").innerText = `Welcome ${login.name}`
            document.querySelector("#loginUser").style.display = "none"
        }
    } catch (err) {
        console.log(err.message);
    }
}
DispalyProduct()

async function AddtoCart(id) {
    try {
        let res = await fetch("./src/public/js/data.json");
        let data = await res.json()

        let cartData = []
        let selectedData = data.filter((item) => item.id == id)

        if (localStorage.getItem("cart") == null || localStorage.getItem("cart") == undefined) {
            cartData.push(selectedData)
            localStorage.setItem("cart", JSON.stringify(cartData))
        } else {
            let oldData = JSON.parse(localStorage.getItem("cart"));
            oldData.push(selectedData);
            localStorage.setItem('cart', JSON.stringify(oldData))
        }
    } catch (err) {
        console.log(err);
    }
}

function GotoProduct(){
    location.href = "./src/pages/Product/product.html"
}

function GotoCart(){
    location.href = "./src/pages/Cart/cart.html"
}
function GotoHome(){
    location.href = "#"
}
function GotoLoginPage(){
    location.href="./src/pages/login/login.html"
}




function LogoutUser(){
    localStorage.removeItem("login")
    location.href = "./index.html"
}