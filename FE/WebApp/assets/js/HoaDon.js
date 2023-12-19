import api from "../../../Config/api.js";

const dataFetching = [];
const fetchData = async () => {

    const respone = await fetch(api.GET_ALL_HOA_DON, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (respone.status === 200) {
        const responseData = await respone.json();
        console.log(responseData);
        for (var dt of responseData) {
            dataFetching.push(dt);
        }

    } else {
        alert("Get data thất bại! ");
    }
}

const render = async () => {
    await fetchData();

    const tableEl = document.querySelector("#root-tbody");
    const tableContent = dataFetching.map(async el => {
        const chitiet = await fetch(`${api.GET_CHI_TIET_HOA_DON}/${el.hoaDonId}`,{
            method:'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const ct =await chitiet.json();
        return `
        <tr>
        <td>${el.hoaDonId}</td>
        <td>Bàn số ${el.soBan}</td>
        <td>${el.ngay}</td>
        <td>${el.gio}H</td>
        <td>${el.thanhTien}đ</td>
        <td>
            <button type="button" class="btn btn-danger btn-sm px-3" data-bs-toggle="modal" data-bs-target="#ShowChiTiet${el.hoaDonId}">
                <i class="fa-solid fa-eye"></i>
            </button>
            <button type="button" class="btn btn-danger btn-sm px-3" data-bs-toggle="modal" data-bs-target="#AddChiTiet${el.hoaDonId}">
                <i class="fa-solid fa-plus"></i>
            </button>
            
            <div class="modal fade" id="AddChiTiet${el.hoaDonId}" tabindex="-1" aria-labelledby="ThemHoaDonlLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ThemHoaDonLabel">Hóa đơn <span id="mahoadon">${el.hoaDonId}</span></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Bàn số</label>
                                <input type="text" class="form-control" id="ThemSoBan" disabled value = "bàn số ${el.soBan}"
                                    placeholder="Bàn Số">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Ngày</label>
                                <input type="text" class="form-control" id="ThemNgay" placeholder="Ngày" value ="${el.ngay}" disabled>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Giờ</label>
                                <input type="text" class="form-control" id="ThemGio" placeholder="Giờ" value ="${el.gio}" disabled>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Mã Sản phẩm</label>
                                <input type="text" class="form-control" id="ThemMaSanPham" placeholder="mã Sản phẩm">   
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Số lượng</label>
                                <input type="text" class="form-control" id="ThemSoLuong" placeholder="Số lượng">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Đơn giá</label>
                                <input type="text" class="form-control" id="ThemDonGia" placeholder="Đơn giá">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary closeAddHoaDon" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary" onclick="ThemChiTietHoaDon(${el.hoaDonId})">Thêm</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="ShowChiTiet${el.hoaDonId}" tabindex="-1" aria-labelledby="ThemHoaDonlLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ThemHoaDonLabel">Hóa đơn <span id="mahoadon">${el.hoaDonId}</span></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <p>Ngày: ${el.ngay}</p>
                            </div>
                            <div class="row">
                                <p>Giờ: ${el.gio}</p>
                            </div>
                            <table class="table table-borderless mb-0">
                                <thead>
                                    <tr style="text-align:center;">
                                        <th scope="col" style="width: 10%;">Sản phẩm</th>
                                        <th scope="col" style="width: 15%;">Bàn số</th>
                                        <th scope="col" style="width: 10%;">Số lượng</th>
                                        <th scope="col" style="width: 20%;">Đơn giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${ct.map(x => {
                                    return `<tr style="text-align:center;">
                                                <td>${x.sanPhamId}</td>
                                                <td>Bàn số ${x.soban}</td>
                                                <td>${x.soLuong}</td>
                                                <td>${x.donGia}</td>
                                            </tr>`})}
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </td>
    </tr>
        `
    });
    const tableContentArray = await Promise.all(tableContent);
    const tableContent2 = tableContentArray.join('');
    tableEl.innerHTML = tableContent2
}
render();

const ThemChiTietHoaDon = async (mahoadon) => {
    const soban = document.querySelector("#ThemSoBan").value;
    const ngay = document.querySelector("#ThemNgay").value;
    const gio = document.querySelector("#ThemGio").value;
    const masanpham = document.querySelector("#ThemMaSanPham").value;
    const soluong = document.querySelector("#ThemSoLuong").value;
    const donGia = document.querySelector("#ThemDonGia").value;

    const data = {
        "id": 0,
        "sanPhamId": masanpham,
        "ngayBan": ngay,
        "gioBan": gio,
        "soban": soban,
        "soLuong": soluong,
        "donGia": donGia,
        "hoaDonId": mahoadon
    }
    await fetch(api.ADD_CHI_TIET_HOA_DON,{
        method:'POST',
        body:data,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        alert("Thêm thành công!");
    })
    .catch(err => {
        alert("Thêm không thành công!");
    })
}

const ThemHoaDon = async () => {
    const soBan = document.querySelector("#ThemSoBan_HoaDon").value;
    const ngay = document.querySelector("#ThemNgay_HoaDon").value;
    const gio = document.querySelector("#ThemGio_HoaDon").value;

    const data = {
        "hoaDonId": 0,
        "soBan": soBan,
        "ngay": ngay,
        "gio": gio,
        "thanhTien": 0
    }
    
    await fetch(api.ADD_HOA_DON,{
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        alert("Thêm thành công!");
    })
    .catch(err => {
        alert("Thêm không thành công!");
    })
}

const SearchHoaDon = async () => {
    const ngay = document.querySelector("#SearchNgay").value;
    const gio = document.querySelector("#SearchGio").value;

    const response = await fetch(`${api.GET_ALL_HOA_DON}?ngay=${ngay}&gio=${gio}`,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (response.status === 200) {
        const responseData = await response.json();
        const tableEl = document.querySelector("#root-tbody");
        
        tableEl.innerHTML = ''
        const tableContent = responseData.map( async el => {
            const chitiet = await fetch(`${api.GET_CHI_TIET_HOA_DON}/${el.hoaDonId}`,{
                method:'GET',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const ct = await chitiet.json();
            return `
            <tr>
                <td>${el.hoaDonId}</td>
                <td>Bàn số ${el.soBan}</td>
                <td>${el.ngay}</td>
                <td>${el.gio}H</td>
                <td>${el.thanhTien}đ</td>
                <td>
                    <button type="button" class="btn btn-danger btn-sm px-3" data-bs-toggle="modal" data-bs-target="#ShowChiTiet${el.hoaDonId}">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button type="button" class="btn btn-danger btn-sm px-3" data-bs-toggle="modal" data-bs-target="#AddChiTiet${el.hoaDonId}">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    
                    <div class="modal fade" id="AddChiTiet${el.hoaDonId}" tabindex="-1" aria-labelledby="ThemHoaDonlLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="ThemHoaDonLabel">Hóa đơn <span id="mahoadon">${el.hoaDonId}</span></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Bàn số</label>
                                        <input type="text" class="form-control" id="ThemSoBan" disabled value = "bàn số ${el.soBan}"
                                            placeholder="Bàn Số">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Ngày</label>
                                        <input type="text" class="form-control" id="ThemNgay" placeholder="Ngày" value ="${el.ngay}" disabled>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Giờ</label>
                                        <input type="text" class="form-control" id="ThemGio" placeholder="Giờ" value ="${el.gio}" disabled>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Mã Sản phẩm</label>
                                        <input type="text" class="form-control" id="ThemMaSanPham" placeholder="mã Sản phẩm">   
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Số lượng</label>
                                        <input type="text" class="form-control" id="ThemSoLuong" placeholder="Số lượng">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Đơn giá</label>
                                        <input type="text" class="form-control" id="ThemDonGia" placeholder="Đơn giá">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary closeAddHoaDon" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-primary" onclick="ThemChiTietHoaDon(${el.hoaDonId})">Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="modal fade" id="ShowChiTiet${el.hoaDonId}" tabindex="-1" aria-labelledby="ThemHoaDonlLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="ThemHoaDonLabel">Hóa đơn <span id="mahoadon">${el.hoaDonId}</span></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <p>Ngày: ${el.ngay}</p>
                                    </div>
                                    <div class="row">
                                        <p>Giờ: ${el.gio}</p>
                                    </div>
                                    <table class="table table-borderless mb-0">
                                        <thead>
                                            <tr style="text-align:center;">
                                                <th scope="col" style="width: 10%;">Sản phẩm</th>
                                                <th scope="col" style="width: 15%;">Bàn số</th>
                                                <th scope="col" style="width: 10%;">Số lượng</th>
                                                <th scope="col" style="width: 20%;">Đơn giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${ct.map(x => {
                                            return `<tr style="text-align:center;">
                                                        <td>${x.sanPhamId}</td>
                                                        <td>Bàn số ${x.soban}</td>
                                                        <td>${x.soLuong}</td>
                                                        <td>${x.donGia}</td>
                                                    </tr>`})}
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            `
        });

        const tableContentArray = await Promise.all(tableContent);
        const tableContent2 = tableContentArray.join('');
        tableEl.innerHTML = tableContent2
    } else {
        alert("Get data thất bại! ");
    }


}
window.ThemChiTietHoaDon = ThemChiTietHoaDon
window.ThemHoaDon = ThemHoaDon
window.SearchHoaDon = SearchHoaDon