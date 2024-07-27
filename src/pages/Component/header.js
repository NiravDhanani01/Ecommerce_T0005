const headerDisplay = () =>{
  document.querySelector(".banner").innerHTML = `
     <header class="wow animate__fadeIn" data-wow-duration="2s">
            <div class="container">
                <nav class="navBar d-flex justify-between">
                    <div class="logoImg">
                        <img src="../../public/img/logo.png" alt="Logo">
                    </div>
                    <div class="navBarItems largeNav">
                        <ul type="none" class="d-flex justify-between">
                            <li><a href="../../../index.html">Home</a></li>
                            <li><a href="../Product/product.html">Product</a></li>
                            <li onclick="gotoCart()" class="cartnotification">Cart <i
                                    class="fa-solid fa-cart-shopping"></i>
                                <div class="bedgis" id="updateQty"></div>
                            </li>
                            <li><a href="../Contact/contact.html">Contact</a> </li>
                            <li class="dropDown"><i class="fa-regular fa-user"></i><span id="userName"> User Name</span>
                                <div class="dropDown-Items">
                                    <ul type="none">
                                        <li id="loginUser"><a href="../login/login.html"><i
                                                    class="fa-solid fa-right-to-bracket"></i> Login</a></li>
                                        <li onclick="gotoUserProfile()" id="ResetPassword"><i
                                                class="fa-solid fa-gear"></i> User Profile</li>
                                        <li onclick="logoutUser()" id="logout"><i
                                                class="fa-solid fa-right-from-bracket"></i> Logout</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="small-navBar">
                        <button class="small-menu-toggle" onclick="toggleNavBar()">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </nav>

                <div class="small-navBarItems" id="smallMenu">
                    <ul type="none" class="d-flex flex-column">
                        <li><a href="../../../index.html">Home</a></li>
                        <li><a href="../Product/product.html">Product</a></li>
                        <li onclick="gotoCartPage()" class="cartnotification">Cart <i class="fa-solid fa-cart-shopping"></i>
                            <div class="bedgis" id="smallupdateQty"></div>
                        </li>
                        <li><a href="../Contact/contact.html">Contact</a> </li>
                        <li class="dropDown"><i class="fa-regular fa-user"></i><span id="smalluserName"> User
                                Name</span>
                            <div class="dropDown-Items">
                                <ul type="none">
                                    <li id="smallloginUser"><a href="../login/login.html"><i
                                                class="fa-solid fa-right-to-bracket"></i> Login</a></li>
                                    <li onclick="gotoUserProfile()" id="ResetPassword"><i class="fa-solid fa-gear"></i>
                                        User Profile</li>
                                    <li onclick="logoutUser()" id="smalllogout"><i
                                            class="fa-solid fa-right-from-bracket"></i> Logout</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
  `
}
headerDisplay()