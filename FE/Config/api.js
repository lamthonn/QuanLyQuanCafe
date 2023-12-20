const path = 'https://localhost:7161';
const api = {
    //sản phẩm
    GET_ALL_SAN_PHAM:`${path}/api/SanPham`,
    ADD_SAN_PHAM:`${path}/api/SanPham`,
    EDIT_SAN_PHAM:`${path}/api/SanPham`,
    DELETE_SAN_PHAM:`${path}/api/SanPham`,

    //hóa đơn
    GET_ALL_HOA_DON: `${path}/api/HoaDon`,
    ADD_HOA_DON: `${path}/api/HoaDon/ThemHoaDon`,
    GET_CHI_TIET_HOA_DON: `${path}/api/HoaDon`,
    ADD_CHI_TIET_HOA_DON: `${path}/api/HoaDon/ThemChiTietHoaDon`,

    // quan ly ban
    GET_ALL_QUAN_LY_BAN: `${path}/api/QuanLyBan`,
    EDIT_QUAN_LY_BAN: `${path}/api/QuanLyBan`,

    //account
    LOGIN: `${path}/api/Account/Login`,

    //ca truc
    GET_ALL_CA_TRUC:`${path}/api/CaTruc`,
    ADD_CA_TRUC:`${path}/api/CaTruc`,
    EDIT_CA_TRUC:`${path}/api/CaTruc`,
    DELETE_CA_TRUC:`${path}/api/CaTruc`,

    //nhan vien
    GET_ALL_NHAN_VIEN:`${path}/api/NhanVien/GetAllNhanVien`,
    ADD_NHAN_VIEN:`${path}/api/NhanVien/AddNhanVien`,
    EDIT_NHAN_VIEN:`${path}/api/NhanVien/SuaNhanVien`,
    DELETE_NHAN_VIEN:`${path}/api/NhanVien/XoaNhanVien`,
};

export default api;