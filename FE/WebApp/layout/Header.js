const header = document.querySelector("#header");

const contentHeader = `
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
                                class="fa-solid fa-wine-bottle"></i>Quản lý đồ uống</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="#!"><i class="fa-solid fa-table"></i>Quản lý bàn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="#!"><i class="fa-solid fa-users"></i>Quản lý nhân viên</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="./HoaDon.html"><i class="fa-solid fa-money-bill"></i>Quản lý hóa đơn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="#!"><i class="fa-regular fa-calendar-check"></i>Quản lý ca trực</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</nav>
`
header.innerHTML = contentHeader;