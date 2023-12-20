
import api from "../../../Config/api.js";

const validateLogin = async () => {
    // Lấy giá trị từ các trường input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra xem có username và password không được để trống
    if (username.trim() === '' || password.trim() === '') {
        alert('Vui lòng nhập đầy đủ tên người dùng và mật khẩu!');
        return;
    }


    var respone = await fetch(api.LOGIN, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    respone = await respone.json();
    console.log(respone);
    if (respone.success) {
        alert("Đăng nhập thành công!")
        window.localStorage.setItem("role", respone.role)
        window.location.href = "/WebApp/AdminPage/Home.html"

    } else {
        alert("Tài khoản hoạc mật khẩu không chính xác! ");
    }

}
window.validateLogin = validateLogin