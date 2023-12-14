namespace QuanLyQuanCafe.Models
{
    public class HoaDon
    {
        public int HoaDonId { get; set; }
        public int SoBan { get; set; }
        public float ThanhTien { get; set; }
        public List<ChiTietHoaDon>? chiTietHoaDons { get; set; }
    }
}
