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
        return `
        <tr>
            <td>${el.sanPhamId}</td>
            <td>${el.tenSanPham}</td>
            <td>${el.gia}đ</td>
            <td>${el.soLuong}Kg</td>
            <td>${el.trangThai}</td>
        </tr>
        `
    }).join('');

    tableEl.innerHTML = tableContent
}
render();

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
                return `
                <tr>
                    <td>${el.sanPhamId}</td>
                    <td>${el.tenSanPham}</td>
                    <td>${el.gia}đ</td>
                    <td>${el.soLuong}Kg</td>
                    <td>${el.trangThai}</td>
                </tr>
                `
            }).join('');

            tableEl.innerHTML = tableContent
        } else {
            alert("Get data thất bại! ");
        }
    }
    catch {
        console.log("lỗi");
    }

}

window.SearchProducts = SearchProducts