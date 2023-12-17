using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuanLyQuanCafe.Data;
using QuanLyQuanCafe.Models;

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
                TrangThai = x.SoLuong == 0 ? "Hết hàng" : "Còn hàng"
            }).ToList();
            return data;
        }

        [HttpPost]
        public async Task<SanPhamViewModel> AddSanPham(SanPhamViewModel sanPham)
        {
            var newSanPham = new SanPham
            {
                Gia = (float)sanPham.Gia,
                SanPhamId = sanPham.SanPhamId,
                TenSanPham = sanPham.TenSanPham,
                SoLuong = (float)sanPham.SoLuong,
                TrangThai = sanPham.SoLuong == 0.0 ? "Hết hàng" : "Còn hàng"
            };
            _context.SanPhams.Add(newSanPham);
            await _context.SaveChangesAsync();
            return new SanPhamViewModel
            {
                SanPhamId = newSanPham.SanPhamId,
                TenSanPham = newSanPham.TenSanPham,
                Gia = newSanPham.Gia,
                SoLuong = newSanPham.SoLuong,
                TrangThai = newSanPham.TrangThai
            };
        }

        [HttpPut("{id}")]
        public async void SuaSanPham(SanPhamViewModel sanPham,int id)
        {
            var OldSanpham = _context.SanPhams.FirstOrDefault(x=> x.SanPhamId == id);
            if(OldSanpham != null)
            {
                OldSanpham.TenSanPham = sanPham.TenSanPham;
                OldSanpham.Gia = (float)sanPham.Gia;
                OldSanpham.SoLuong = (float)sanPham.SoLuong;
                OldSanpham.TrangThai = sanPham.SoLuong == 0.0 ? "Hết hàng" : "Còn hàng";
                _context.SanPhams.Update(OldSanpham);
                _context.SaveChanges();
            }
        }
    }
}
