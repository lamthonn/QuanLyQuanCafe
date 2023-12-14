using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuanLyQuanCafe.Data;

namespace QuanLyQuanCafe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SanPhamController : ControllerBase
    {
        public readonly AppDbContext _context;
        public SanPhamController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<SanPhamViewModel>> GetAllSanPham()
        {
            var data = _context.SanPhams.Select(x=> new SanPhamViewModel
            {
                SanPhamId = x.SanPhamId,
                TenSanPham = x.TenSanPham,
                Gia = x.Gia,
                SoLuong = x.SoLuong,
                TrangThai = x.TrangThai
            }).ToList();
            return data;
        }
    }
}
