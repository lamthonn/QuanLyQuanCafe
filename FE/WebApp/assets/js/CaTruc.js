import api from "../../../Config/api.js";

let dataFetching = [];
const fetchData = async () => {
    dataFetching = [];
    const respone = await fetch(api.GET_ALL_CA_TRUC, {
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
        <td>${el.id}</td>
        <td>${el.username}</td>
        <td>${el.thoiGian}</td>
        <td>
            <button type="button" class="btn btn-danger btn-sm px-3 btnEdit" data-bs-toggle="modal" data-bs-target="#SuaSanPham${el.id}">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" class="btn btn-danger btn-sm px-3" onclick ="xoaSanPham('${el.id}')">
                <i class="fa-solid fa-trash"></i>
            </button>
            <div class="modal fade" id="SuaSanPham${el.id}" tabindex="-1" aria-labelledby="SuaSanPhamlLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="SuaSanPhamLabel">Sửa ca trực</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Mã ca trực</label>
                                    <input type="text" class="form-control" disabled id="SuaMaDoUong${el.id}" value="${el.id}"
                                        placeholder="Mã ca trực">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Tên nhân viên</label>
                                    <input type="text" class="form-control" id="SuaTenDoUong${el.id}" value="${el.username}"
                                        placeholder="Tên nhân viên">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Thời gian</label>
                                    <input type="text" class="form-control" id="SuaSoLuong${el.id}" value="${el.thoiGian}"
                                        placeholder="Thời gian">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary closeEditProducts${el.id}" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary" onclick="suaSanPham(${el.id})">Sửa</button>
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
        <td>${el.id}</td>
        <td>${el.username}</td>
        <td>${el.thoiGian}</td>
        <td>Không có quyền</td>
        </tr>`
    }
    }).join('');

    tableEl.innerHTML = tableContent
}
render();

const suaSanPham = async (masp) => {
    const txtMaSP = document.querySelector(`#SuaMaDoUong${masp}`);
    const txtTenSP = document.querySelector(`#SuaTenDoUong${masp}`);
    const txtSoLuong = document.querySelector(`#SuaSoLuong${masp}`);

    const data = {
        'id': txtMaSP.value,
        'username': txtTenSP.value,
        'thoiGian': txtSoLuong.value
    }
    await fetch(`${api.EDIT_CA_TRUC}/${masp}`, {
        method: 'PUT',
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
        await fetch(`${api.DELETE_CA_TRUC}/${masp}`, {
            method: 'DELETE',
        }).then((res) => {
            alert("Xóa thành công!")
            render();
        }).catch((err) => {
            alert("Xóa thất bại!")
        })
    }
}

const ThemSanPham = async () => {
    const txtTenSP = document.querySelector(`#ThemTenDoUong`);
    const txtGiaSP = document.querySelector(`#ThemGiaDoUong`);
    const formdata = {
        'username': txtGiaSP.value,
        'thoiGian': txtTenSP.value,
    }

    await fetch(api.ADD_CA_TRUC, {
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
        const response = await fetch(`${api.GET_ALL_CA_TRUC}?key=${key}`, {
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
                    <td>${el.id}</td>
                    <td>${el.username}</td>
                    <td>${el.thoiGian}đ</td>
                    <td>
                        <button type="button" class="btn btn-danger btn-sm px-3 btnEdit" data-bs-toggle="modal" data-bs-target="#SuaSanPham${el.id}">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button type="button" class="btn btn-danger btn-sm px-3" onclick ="xoaSanPham('${el.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <div class="modal fade" id="SuaSanPham${el.id}" tabindex="-1" aria-labelledby="SuaSanPhamlLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="SuaSanPhamLabel">Sửa ca trực</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Mã ca trực</label>
                                                <input type="text" class="form-control" disabled id="SuaMaDoUong${el.id}" value="${el.id}"
                                                    placeholder="Mã ca trực">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">Tên nhân viên</label>
                                                <input type="text" class="form-control" id="SuaTenDoUong${el.id}" value="${el.username}"
                                                    placeholder="Tên nhân viên">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">Thời gian</label>
                                                <input type="text" class="form-control" id="SuaSoLuong${el.id}" value="${el.thoiGian}"
                                                    placeholder="Thời gian">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary closeEditProducts${el.id}" data-bs-dismiss="modal">Đóng</button>
                                            <button type="button" class="btn btn-primary" onclick="suaSanPham(${el.id})">Sửa</button>
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
                    <td>${el.id}</td>
                    <td>${el.username}</td>
                    <td>${el.thoiGian}đ</td>
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
                                    data-bs-target="#ThemSanPham"><i class="fa-solid fa-plus"></i> Thêm ca trực</button>
                            </li>
    
                        </ul>
                    </div>`
}
