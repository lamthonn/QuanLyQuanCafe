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
    ADD_CHI_TIET_HOA_DON: `${path}/api/HoaDon/ThemChiTietHoaDon`
};

export default api;