const footeDisplay = () =>{
    document.querySelector('.footer-section').innerHTML = `
      <div class="container">
            <footer>
                <div class="footer-details d-flex flex-wrap justify-between">
                    <div class="footer-one">
                        <div class="footlogo">
                            <img src="../../public/img/logo.png" width="200px" alt="">
                            <p class="endText">
                                We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a perfect place for a couple.
                            </p>
                            <div class="d-flex">
                                <span class="homeicon"><i class="fa-solid fa-house"></i></span>
                                <p class="companyAddress"> 685 Market Street, Las Vegas, LA 95820, United States.</p>
                            </div>
                            <div class="d-flex">
                                <span class="homeicon"><i class="fa-solid fa-phone"></i></span>
                                <p class="companyAddress"> (+01) 850-315-5862</p>
                            </div>
                            <div class="d-flex">
                                <span class="homeicon"><i class="fa-solid fa-envelope"></i></span>
                                <p class="companyAddress"> example@domain.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-two d-flex justify-center">
                        <div>
                            <h3>Pages</h3>
                            <ul type="none">
                                <li class="page-link"><a href="../../../index.html">Home</a></li>
                                <li class="page-link"><a href="../Product/product.html">Product</a></li>
                                <li class="page-link" onclick="gotoCart()">Cart</li>
                                <li class="page-link" ><a href="../Contact/contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-three">
                        <h3>Download App</h3>
                        <p>Save Upto 10% With App & New User only</p>
                        <div class="d-flex justify-center Qr">
                            <img src="../../public/img/qr.png" alt="">
                            <div class="playStore">
                                <div><img src="../../public/img/appstore.svg" alt=""></div>
                                <div><img src="../../public/img/playstore.svg" alt=""></div>
                            </div>
                        </div>
                        <h4 class="connected">Stay connected </h4>
                        <div class="social-icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-pinterest-p"></i>
                        </div>
                    </div>
                </div>
                <div class="endnotes">
                    <h4 class="text-center">copyRights &#169;</h4>
                </div>
            </footer>
        </div>
    `
}

footeDisplay()