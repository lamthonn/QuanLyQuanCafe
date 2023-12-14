using System.ComponentModel.DataAnnotations.Schema;

namespace QuanLyQuanCafe.Models
{
    public class CaTruc
    {
        public int Id { get; set; }
        public DateTime ThoiGian { get; set; }
        public string Username { get; set; }
        [ForeignKey("Username")]
        public User? User { get; set; }
    }
}
