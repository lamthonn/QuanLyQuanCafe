using System.ComponentModel.DataAnnotations.Schema;

namespace QuanLyQuanCafe.Models
{
    public class ChiTietHoaDon
    {
        public int ID { get; set; }
        public int SanPhamId { get; set; }
        public DateTime NgayBan { get; set; }
        public int Soban { get; set; }
        public int SoLuong { get; set; }
        public float DonGia { get; set; }
        public int HoaDonId { get; set; }
        [ForeignKey("HoaDonId")]
        public HoaDon HoaDon { get; set; }
    }
}
