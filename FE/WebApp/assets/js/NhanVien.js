import api from "../../../Config/api.js";

let dataFetching = [];
const fetchData = async () => {
    dataFetching = [];
    const respone = await fetch(api.GET_ALL_NHAN_VIEN, {
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
        <td>${el.username}</td>
        <td>${el.password}</td>
        <td>${el.email}</td>
        <td>${el.hoTen}</td>
        <td>${el.ngaySinh}</td>
        <td>${el.diaChi}</td>
        <td>
            <button type="button" class="btn btn-danger btn-sm px-3 btnEdit" data-bs-toggle="modal" data-bs-target="#SuaSanPham${el.username}">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" class="btn btn-danger btn-sm px-3" onclick ="xoaSanPham('${el.username}')">
                <i class="fa-solid fa-trash"></i>
            </button>
            <div class="modal fade" id="SuaSanPham${el.username}" tabindex="-1" aria-labelledby="SuaSanPhamlLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="SuaSanPhamLabel">Sửa nhân viên</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Tên tài khoản</label>
                                    <input type="text" class="form-control" disabled id="SuaMaDoUong${el.username}" value="${el.username}"
                                        placeholder="Tên tài khoản">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Mật khẩu</label>
                                    <input type="text" class="form-control" id="SuaTenDoUong${el.username}" value="${el.password}"
                                        placeholder="Mật khẩu">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="SuaEmail${el.username}" value="${el.email}"
                                        placeholder="Email">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Họ tên</label>
                                    <input type="text" class="form-control" id="SuaHoTen${el.username}" value="${el.hoTen}"
                                        placeholder="Họ tên">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Ngày sinh</label>
                                    <input type="text" class="form-control" id="SuaNgaySinh${el.username}" value="${el.ngaySinh}"
                                        placeholder="Ngày sinh">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Địa chỉ</label>
                                    <input type="text" class="form-control" id="SuaDiaChi${el.username}" value="${el.diaChi}"
                                        placeholder="Địa chỉ">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary closeEditProducts${el.username}" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary" onclick="suaSanPham('${el.username}')">Sửa</button>
                            </div>
                        </div>
                    </div>
                </div>
        </td>
    </tr>
        `
    }
    else {
        return `<tr>
        <td>${el.username}</td>
        <td>${el.password}</td>
        <td>${el.email}</td>
        <td>${el.hoTen}</td>
        <td>${el.ngaySinh}</td>
        <td>${el.diaChi}</td>
        <td>Không có quyền</td>
        </tr>`
    }
    }).join('');

    tableEl.innerHTML = tableContent
}
render();

const suaSanPham = async (masp) => {
    console.log("hihi");
    const txtMaSP = document.querySelector(`#SuaMaDoUong${masp}`);
    const txtTenSP = document.querySelector(`#SuaTenDoUong${masp}`);
    const txtEmail = document.querySelector(`#SuaEmail${masp}`);
    const txtHoTen = document.querySelector(`#SuaHoTen${masp}`);
    const txtNgaySinh = document.querySelector(`#SuaNgaySinh${masp}`);
    const txtDiaChi = document.querySelector(`#SuaDiaChi${masp}`);

    const data = {
        'username': txtMaSP.value,
        'password': txtTenSP.value,
        'email': txtEmail.value,
        "role": "employee",
        'hoTen': txtHoTen.value,
        'ngaySinh': txtNgaySinh.value,
        'diaChi': txtDiaChi.value
    }
    await fetch(`${api.EDIT_NHAN_VIEN}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        document.querySelector(`.closeEditProducts${masp}`).click()
        alert("Sửa thành công!")
        render();
    }).catch((err) => {
        alert("Sửa thất bại!")
    })

}

const xoaSanPham = async (masp) => {
    if (confirm("bạn có muốn xóa thông tin này?")) {
        const data = {
            "username": masp
        }
        await fetch(`${api.DELETE_NHAN_VIEN}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            alert("Xóa thành công!")
            render();
        }).catch((err) => {
            alert("Xóa thất bại!")
        })
    }
}

const ThemSanPham = async () => {
    const txtUsername = document.querySelector(`#ThemUsername`);
    const txtPassword = document.querySelector(`#ThemPassword`);
    const txtEmail = document.querySelector(`#ThemEmail`);
    const txtHoTen = document.querySelector(`#ThemHoTen`);
    const txtNgaySinh = document.querySelector(`#ThemNgaySinh`);
    const txtDiaChi = document.querySelector(`#ThemDiaChi`);
    const formdata = {
        'username': txtUsername.value,
        'password': txtPassword.value,
        'email': txtEmail.value,
        'hoTen': txtHoTen.value,
        'ngaySinh': txtNgaySinh.value,
        'diaChi': txtDiaChi.value
    }

    await fetch(api.ADD_NHAN_VIEN, {
        method: 'POST',
        body: JSON.stringify(formdata),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        document.querySelector(".closeAddProducts").click()
        alert("thêm thành công!")
        render();
    }).catch((err) => {
        alert("thêm thất bại!")
    })
}

const SearchProducts = async () => {
    const key = document.querySelector("#Search").value;
    try {
        const response = await fetch(`${api.GET_ALL_NHAN_VIEN}?key=${key}`, {
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
                    <td>${el.username}</td>
                    <td>${el.password}</td>
                    <td>${el.email}</td>
                    <td>${el.hoTen}</td>
                    <td>${el.ngaySinh}</td>
                    <td>${el.diaChi}</td>
                    <td>
                        <button type="button" class="btn btn-danger btn-sm px-3 btnEdit" data-bs-toggle="modal" data-bs-target="#SuaSanPham${el.username}">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button type="button" class="btn btn-danger btn-sm px-3" onclick ="xoaSanPham('${el.username}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <div class="modal fade" id="SuaSanPham${el.username}" tabindex="-1" aria-labelledby="SuaSanPhamlLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="SuaSanPhamLabel">Sửa nhân viên</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Tên tài khoản</label>
                                                <input type="text" class="form-control" disabled id="SuaMaDoUong${el.username}" value="${el.username}"
                                                    placeholder="Tên tài khoản">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">Mật khẩu</label>
                                                <input type="text" class="form-control" id="SuaTenDoUong${el.username}" value="${el.password}"
                                                    placeholder="Mật khẩu">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">Email</label>
                                                <input type="text" class="form-control" id="SuaEmail${el.username}" value="${el.email}"
                                                    placeholder="Email">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">Họ tên</label>
                                                <input type="text" class="form-control" id="SuaHoTen${el.username}" value="${el.hoTen}"
                                                    placeholder="Họ tên">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">Ngày sinh</label>
                                                <input type="text" class="form-control" id="SuaNgaySinh${el.username}" value="${el.ngaySinh}"
                                                    placeholder="Ngày sinh">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">Địa chỉ</label>
                                                <input type="text" class="form-control" id="SuaDiaChi${el.username}" value="${el.diaChi}"
                                                    placeholder="Địa chỉ">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary closeEditProducts${el.username}" data-bs-dismiss="modal">Đóng</button>
                                            <button type="button" class="btn btn-primary" onclick="suaSanPham('${el.username}')">Sửa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </td>
                </tr>
                    `
                }
                else {
                    return `<tr>
                    <td>${el.username}</td>
                    <td>${el.password}</td>
                    <td>${el.email}</td>
                    <td>${el.hoTen}</td>
                    <td>${el.ngaySinh}</td>
                    <td>${el.diaChi}</td>
                    <td>Không có quyền</td>
                    </tr>`
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
                                    data-bs-target="#ThemSanPham"><i class="fa-solid fa-plus"></i> Thêm nhân viên</button>
                            </li>
    
                        </ul>
                    </div>`
}
