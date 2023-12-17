const footer = document.querySelector("#footer");

const content = `
<footer class="text-center text-lg-start text-white" style="background-color: #3e4551">
<!-- Grid container -->
<div class="container p-4 pb-0">
    <!-- Section: Links -->
    <section class="">
        <!--Grid row-->
        <div class="row">
            <!--Grid column-->
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <p>
                    Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN <br>
                    Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp.<br>
                    Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh  <br>
                    © 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu
                </p>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                    <li>
                    <a href="#!" class="text-white"><i class="fa-solid fa-phone"></i> Đặt hàng: 1800 6936</a>
                    </li>
                    <li>
                    <a href="#!" class="text-white"><i class="fa-solid fa-location-dot"></i>Liên hệ</a><br>
                    <p>Tầng 3-4 Hub Building <br> 195/10E Điện Biên Phủ, P.15,<br> Q.Bình Thạnh, TP.Hồ Chí Minh</p>
                    </li>
                    <li>
                </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Giới thiệu</h5>

            <ul class="list-unstyled mb-0">
                <li>
                <a href="#!" class="text-white">Về chúng tôi</a>
                </li>
                <li>
                <a href="#!" class="text-white">Sản phẩm</a>
                </li>
                <li>
                <a href="#!" class="text-white">Khuyến mãi</a>
                </li>
                <li>
                <a href="#!" class="text-white">Chuyện cà phê</a>
                </li>
            </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Điều khoản</h5>

            <ul class="list-unstyled mb-0">
                <li>
                <a href="#!" class="text-white">Điều khoản sử dụng</a>
                </li>
                <li>
                <a href="#!" class="text-white">Chính sách bảo mật thông tin</a>
                </li>
                <li>
                <a href="#!" class="text-white">Hướng dẫn xuất hóa đơn GTGT</a>
                </li>
            </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <div class="uiScaledImageContainer _2zfr" style="width:270px;height:130px;"><img class="scaledImageFitHeight img" src="https://scontent.xx.fbcdn.net/v/t39.30808-6/408254425_367812245609892_6106953464367600530_n.jpg?stp=dst-jpg_p130x130&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=081abc&amp;_nc_ohc=TE930MqObSoAX8hCfOs&amp;_nc_ht=scontent.xx&amp;edm=AOm7FCUEAAAA&amp;oh=00_AfCd_2C_-N-vhilGr3shpVJwSjX9e_0VWj3ENQ1WAnQNDg&amp;oe=6583E06B" data-src="https://scontent.xx.fbcdn.net/v/t39.30808-6/408254425_367812245609892_6106953464367600530_n.jpg?stp=dst-jpg_p130x130&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=081abc&amp;_nc_ohc=TE930MqObSoAX8hCfOs&amp;_nc_ht=scontent.xx&amp;edm=AOm7FCUEAAAA&amp;oh=00_AfCd_2C_-N-vhilGr3shpVJwSjX9e_0VWj3ENQ1WAnQNDg&amp;oe=6583E06B" style="left:-31px;" alt="Ảnh của The Coffee House." width="300" height="130" caption="Ảnh của The Coffee House."></div>
            </div>
                <!--Grid column-->
        </div>
        <!--Grid row-->
    </section>
    <!-- Section: Links -->
    <hr class="mb-4" />

    <!-- Section: Social media -->
    <section class="mb-4 text-center">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="fab fa-facebook-f"></i></a>

        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="fab fa-twitter"></i ></a>

        <!-- Google -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="fab fa-google"></i ></a>

        <!-- Instagram -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="fab fa-instagram"></i ></a>

        <!-- Linkedin -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="fab fa-linkedin-in"></i ></a>

        <!-- Github -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="fa-solid fa-store"></i></a>
    </section>
    <!-- Section: Social media -->
</div>
<!-- Grid container -->

<!-- Copyright -->
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)" >© 2020 Copyright:thecoffehouse</a></div>
<!-- Copyright -->
</footer>
`

footer.innerHTML = content;