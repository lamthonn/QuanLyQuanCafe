import api from "../../../Config/api.js";

const dataFetching = [];
const fetchData = async () => {

    const respone = await fetch(api.GET_ALL_SAN_PHAM, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (respone.status === 200) {
        const responseData = await respone.json();
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
    const tableContent = dataFetching.map(el => {
        if(window.localStorage.getItem('role') == 'admin') {

            return `
        <tr>
        <td>${el.sanPhamId}</td>
        <td>${el.tenSanPham}</td>
        <td>${el.gia}đ</td>
        <td>${el.soLuong}Kg</td>
        <td>${el.trangThai}</td>
        <td>
            <button type="button" class="btn btn-danger btn-sm px-3 btnEdit" data-bs-toggle="modal" data-bs-target="#SuaSanPham${el.sanPhamId}">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" class="btn btn-danger btn-sm px-3" onclick ="xoaSanPham('${el.sanPhamId}')">
                <i class="fa-solid fa-trash"></i>
            </button>
            <div class="modal fade" id="SuaSanPham${el.sanPhamId}" tabindex="-1" aria-labelledby="SuaSanPhamlLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="SuaSanPhamLabel">Sửa sản phẩm</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Mã đồ uống</label>
                                    <input type="text" class="form-control" disabled id="SuaMaDoUong${el.sanPhamId}" value="${el.sanPhamId}"
                                        placeholder="Mã đồ uống">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Tên đồ uống</label>
                                    <input type="text" class="form-control" id="SuaTenDoUong${el.sanPhamId}" value="${el.tenSanPham}"
                                        placeholder="Tên đồ uống">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Giá</label>
                                    <input type="text" class="form-control" id="SuaGiaDoUong${el.sanPhamId}" placeholder="Giá" value="${el.gia}">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Số lượng</label>
                                    <input type="text" class="form-control" id="SuaSoLuong${el.sanPhamId}" value="${el.soLuong}"
                                        placeholder="Số lượng">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary closeEditProducts${el.sanPhamId}" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary" onclick="suaSanPham(${el.sanPhamId})">Sửa</button>
                            </div>
                        </div>
                    </div>
                </div>
        </td>
    </tr>
        `
        }
        else {
            return `
            <tr>
        <td>${el.sanPhamId}</td>
        <td>${el.tenSanPham}</td>
        <td>${el.gia}đ</td>
        <td>${el.soLuong}Kg</td>
        <td>${el.trangThai}</td>
        <td>Không có quyền</td>
        </tr>
            `
        }
    }).join('');

    tableEl.innerHTML = tableContent
}
render();

const suaSanPham = async (masp) => {
    const txtMaSP = document.querySelector(`#SuaMaDoUong${masp}`);
    const txtTenSP = document.querySelector(`#SuaTenDoUong${masp}`);
    const txtGiaSP = document.querySelector(`#SuaGiaDoUong${masp}`);
    const txtSoLuong = document.querySelector(`#SuaSoLuong${masp}`);

    const data = {
        'sanPhamId': txtMaSP.value,
        'tenSanPham': txtTenSP.value,
        'gia': txtGiaSP.value,
        'soLuong': txtSoLuong.value,
        'trangThai': "Còn hàng"
    }
    await fetch(`${api.EDIT_SAN_PHAM}/${masp}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        alert("Sửa thành công!")
        document.querySelector(`.closeEditProducts${masp}`).click()
    }).catch((err) => {
        alert("Sửa thất bại!")
    })

}

const xoaSanPham = async (masp) => {
    if (confirm("bạn có muốn xóa thông tin này?")) {
        await fetch(`${api.DELETE_SAN_PHAM}/${masp}`, {
            method: 'DELETE',
        }).then((res) => {
            alert("Xóa thành công!")
        }).catch((err) => {
            alert("Xóa thất bại!")
        })
    }
}

const ThemSanPham = async () => {
    const txtTenSP = document.querySelector(`#ThemTenDoUong`);
    const txtGiaSP = document.querySelector(`#ThemGiaDoUong`);
    const txtSoLuong = document.querySelector(`#ThemSoLuong`);

    const formdata = {
        'sanPhamId': 0,
        'tenSanPham': txtTenSP.value,
        'gia': txtGiaSP.value,
        'soLuong': txtSoLuong.value,
        'trangThai': "còn hàng"
    }

    await fetch(api.ADD_SAN_PHAM, {
        method: 'POST',
        body: JSON.stringify(formdata),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        alert("thêm thành công!")
        document.querySelector(".closeAddProducts").click()
    }).catch((err) => {
        alert("thêm thất bại!")
    })
}

const SearchProducts = async () => {
    const key = document.querySelector("#Search").value;
    try {
        const response = await fetch(`${api.GET_ALL_SAN_PHAM}?key=${key}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            const responseData = await response.json();
            // for (var dt of responseData) {
            //     dataFetching.push(dt);
            // }
            const tableEl = document.querySelector("#root-tbody");
            tableEl.innerHTML = ''
            const tableContent = responseData.map(el => {
                if(window.localStorage.getItem('role') == 'admin') {

                    return `
                <tr>
                <td>${el.sanPhamId}</td>
                <td>${el.tenSanPham}</td>
                <td>${el.gia}đ</td>
                <td>${el.soLuong}Kg</td>
                <td>${el.trangThai}</td>
                <td>
                    <button type="button" class="btn btn-danger btn-sm px-3 btnEdit" data-bs-toggle="modal" data-bs-target="#SuaSanPham${el.sanPhamId}">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button type="button" class="btn btn-danger btn-sm px-3" onclick ="xoaSanPham('${el.sanPhamId}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <div class="modal fade" id="SuaSanPham${el.sanPhamId}" tabindex="-1" aria-labelledby="SuaSanPhamlLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="SuaSanPhamLabel">Sửa sản phẩm</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Mã đồ uống</label>
                                            <input type="text" class="form-control" disabled id="SuaMaDoUong${el.sanPhamId}" value="${el.sanPhamId}"
                                                placeholder="Mã đồ uống">
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Tên đồ uống</label>
                                            <input type="text" class="form-control" id="SuaTenDoUong${el.sanPhamId}" value="${el.tenSanPham}"
                                                placeholder="Tên đồ uống">
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Giá</label>
                                            <input type="text" class="form-control" id="SuaGiaDoUong${el.sanPhamId}" placeholder="Giá" value="${el.gia}">
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Số lượng</label>
                                            <input type="text" class="form-control" id="SuaSoLuong${el.sanPhamId}" value="${el.soLuong}"
                                                placeholder="Số lượng">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary closeEditProducts${el.sanPhamId}" data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary" onclick="suaSanPham(${el.sanPhamId})">Sửa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </td>
            </tr>
                `
                }
                else {
                    return `
                    <tr>
                <td>${el.sanPhamId}</td>
                <td>${el.tenSanPham}</td>
                <td>${el.gia}đ</td>
                <td>${el.soLuong}Kg</td>
                <td>${el.trangThai}</td>
                <td>Không có quyền</td>
                </tr>
                    `
                }
            }).join('');

            tableEl.innerHTML = tableContent
        } else {
            alert("Get data thất bại! ");
        }
    }
    catch {

    }

}
window.suaSanPham = suaSanPham;
window.xoaSanPham = xoaSanPham;
window.ThemSanPham = ThemSanPham;
window.SearchProducts = SearchProducts;

if(window.localStorage.getItem('role') == 'admin') {
    document.querySelector('.rightHead').innerHTML = `
    <div class="dropdown dropstart">
    <button class="btn btn-sm btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        Khác
    </button>
    <ul class="dropdown-menu">
        <li><button class="dropdown-item AddProducts" type="button" data-bs-toggle="modal"
                data-bs-target="#ThemSanPham"><i class="fa-solid fa-plus"></i> Thêm sản phẩm</button>
        </li>

    </ul>
</div>`
}
