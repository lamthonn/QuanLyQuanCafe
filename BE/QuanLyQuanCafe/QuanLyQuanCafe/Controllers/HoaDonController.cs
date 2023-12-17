using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuanLyQuanCafe.Data;
using QuanLyQuanCafe.Models;

namespace QuanLyQuanCafe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoaDonController : ControllerBase
    {
        public readonly AppDbContext _context;
        public HoaDonController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<HoaDonViewModel>> GetAllHoaDon(string? key)
        {
            var data = _context.HoaDons.AsNoTracking();
            var ChiTietHD = _context.ChiTietHoaDons.AsNoTracking();
            if(data != null)
            {

            }
            var result = data.Select(x => new HoaDonViewModel
            {
                HoaDonId = x.HoaDonId,
                SoBan = x.SoBan,
                ngay = x.ngay.ToString("yyyy/MM/dd"),
                Gio = x.Gio,
                ThanhTien = ChiTietHD.Where(y => y.HoaDonId == x.HoaDonId).Sum(y => y.DonGia),
            }).ToList();
            return result;
        }

        [HttpGet("{IdHoaDon}")]
        public async Task<List<ChiTietHoaDonViewModel>> GetChiTietHoaDon(int IdHoaDon)
        {
            var data = _context.ChiTietHoaDons.Where(x => x.HoaDonId == IdHoaDon).AsNoTracking();
            var result = data.Select(x => new ChiTietHoaDonViewModel
            {
                HoaDonId = x.HoaDonId,
                Soban = x.Soban,
                DonGia = x.DonGia,
                GioBan = x.Gio,
                NgayBan = x.NgayBan.ToString("yyyy/MM/dd"),
                SanPhamId = x.SanPhamId,
                SoLuong = x.SoLuong,
            }).ToList();
            return result;
        }

        [HttpPost("ThemChiTietHoaDon")]
        public async Task<ChiTietHoaDonViewModel> ThemChiTietHoaDon(ChiTietHoaDonViewModel CTHoaDon)
        {
            var newCTHD = new ChiTietHoaDon
            {
                ID = CTHoaDon.ID,
                HoaDonId = (int)CTHoaDon.HoaDonId,
                NgayBan = DateTime.Parse(CTHoaDon.NgayBan),
                SanPhamId = (int)CTHoaDon.SanPhamId,
                Soban = (int)CTHoaDon.Soban,
                SoLuong = (int)CTHoaDon.SoLuong,
                DonGia = (int)CTHoaDon.DonGia
            };
            _context.ChiTietHoaDons.Add(newCTHD);
            _context.SaveChanges();
            return new ChiTietHoaDonViewModel
            {
                ID = newCTHD.ID,
                HoaDonId = newCTHD.HoaDonId,
                NgayBan = newCTHD.NgayBan.ToString(),
                SanPhamId = newCTHD.SanPhamId,
                Soban = newCTHD.Soban,
                SoLuong = newCTHD.SoLuong,
                DonGia = newCTHD.DonGia
            };
        }


        [HttpPost("ThemHoaDon")]
        public async Task<HoaDonViewModel> ThemHoaDon(HoaDonViewModel hoadon)
        {
            var _hoadon = new HoaDon
            {
                HoaDonId = hoadon.HoaDonId,
                ngay = DateTime.Parse(hoadon.ngay),
                Gio = hoadon.Gio,
                SoBan = hoadon.SoBan,
                ThanhTien = 0
            };
            _context.HoaDons.Add(_hoadon);
            _context.SaveChanges();
            return new HoaDonViewModel
            {
                HoaDonId = _hoadon.HoaDonId,
                ngay = _hoadon.ngay.ToString(),
                SoBan = _hoadon.SoBan,
                Gio = _hoadon.Gio,
                ThanhTien = _hoadon.ThanhTien
            };
        }

    }
}
