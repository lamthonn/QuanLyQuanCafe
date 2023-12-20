const header = document.querySelector("#header");

const contentHeaderAdmin = `
<div class="top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="header-meta-list">
                            <div class="location-header">
                                <a href="/"><i class="fa-solid fa-location-dot icon-location"></i><span>146 Cửa hàng khắp cả nước</span></a>
                            </div>
                            <div>
                                <a href="/"><i class="fa-solid fa-phone icon-phone"></i><span>Đặt hàng: 1800.6936</span></a>
                            </div>
                        </div>
                    </div>
                </div>
        <nav class="navbar navbar-expand-lg bg-light navbar-light">
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="container d-flex justify-content-center">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <a class="navbar-brand" href="#"><img id="MDB-logo"
                                src="../assets/images/logo.png"
                                alt="Logo The Coffe House" draggable="false" height="30" /></a>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav align-items-center mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link mx-2" href="./Home.html"><i class="fa-solid fa-home"></i>Trang
                                        chủ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-2" href="./SanPham.html"><i
                                            class="fa-solid fa-wine-bottle"></i>Quản lý đồ uống</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-2" href="./QuanLyBan.html"><i class="fa-solid fa-table"></i>Quản lý bàn</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-2" href="./NhanVien.html"><i class="fa-solid fa-users"></i>Quản lý nhân
                                        viên</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-2" href="./HoaDon.html"><i class="fa-solid fa-money-bill"></i>Quản lý hóa
                                        đơn</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-2" href="./CaTruc.html"><i class="fa-regular fa-calendar-check"></i>Quản lý
                                        ca trực</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-2" href="./Login.html"><i class="fa-regular fa-calendar-check"></i>Đăng xuất</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
`

const contentHeaderUser = `
<nav class="navbar navbar-expand-lg bg-light navbar-light">
<button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
    data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
</button>
<div class="container d-flex justify-content-center">
    <div class="row">
        <div class="col-12 d-flex justify-content-center mb-3">
            <a class="navbar-brand" href="#"><img id="MDB-logo"
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                    alt="MDB Logo" draggable="false" height="30" /></a>
        </div>
        <div class="col-12 d-flex justify-content-center">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav align-items-center mx-auto">
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="./Home.html"><i class="fa-solid fa-home"></i>Trang
                            chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="./SanPham.html"><i
                                class="fa-solid fa-wine-bottle"></i>Xem đồ uống</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="./QuanLyBan.html"><i class="fa-solid fa-table"></i>Xem bàn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="./CaTruc.html"><i class="fa-regular fa-calendar-check"></i>Xem ca trực</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="./Login.html" @click="handleDangXuat()"><i class="fa-regular fa-calendar-check"></i>Đăng xuất</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</nav>
`

var role = window.localStorage.getItem("role");
if(role === "admin") {
    header.innerHTML = contentHeaderAdmin;
}
else {
    header.innerHTML = contentHeaderUser;
}

const handleDangXuat = () => {
    window.localStorage.removeItem('role')
}

window.handleDangXuat = handleDangXuat;