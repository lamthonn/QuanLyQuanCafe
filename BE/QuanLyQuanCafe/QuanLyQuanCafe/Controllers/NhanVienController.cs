using Microsoft.AspNetCore.Mvc;
using QuanLyQuanCafe.Data;
using QuanLyQuanCafe.Models;
using System.Data;

namespace QuanLyQuanCafe.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class NhanVienController : Controller
    {
        public readonly AppDbContext _context;
        public NhanVienController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<List<NhanVienVM>> GetAllNhanVien(string? key)
        {
            var data = _context.Users.Where(x => x.Role.Equals("employee")).ToList();

            if (!string.IsNullOrEmpty(key))
            {
                data = data.Where(x => x.HoTen.Contains(key) || x.Username.Contains(key) || x.DiaChi.Contains(key) || x.Email.Contains(key)).ToList();
            }

            var result = data.Select(x => new NhanVienVM
            {
                Username = x.Username,
                Email = x.Email,
                DiaChi = x.DiaChi,
                HoTen = x.HoTen,
                Role = "employee",
                NgaySinh = x.NgaySinh.ToString("dd/MM/yyyy"),
                Password = x.Password
            }).ToList();
            return result;
        }
        [HttpPost]
        public async Task<NhanVienVM> AddNhanVien(NhanVienVM input)
        {
            var newNhanVien = new User
            {
                Username = input.Username,
                Email = input.Email,
                DiaChi = input.DiaChi,
                HoTen = input.HoTen,
                Role = input.Role ?? "employee",
                NgaySinh = DateTime.Parse(input.NgaySinh),
                Password = input.Password
            };
            _context.Users.Add(newNhanVien);
            await _context.SaveChangesAsync();
            return new NhanVienVM
            {
                Username = input.Username,
                Email = input.Email,
                DiaChi = input.DiaChi,
                HoTen = input.HoTen,
                Role = input.Role,
                NgaySinh = input.NgaySinh,
                Password = input.Password
            };
        }

        [HttpPost]
        public async void SuaNhanVien(NhanVienVM input)
        {
            var oldNhanvien = _context.Users.FirstOrDefault(x => x.Username == input.Username);
            if (oldNhanvien != null)
            {
                oldNhanvien.Email = input.Email;
                oldNhanvien.DiaChi = input.DiaChi;  
                oldNhanvien.HoTen = input.HoTen;
                oldNhanvien.NgaySinh = DateTime.Parse(input.NgaySinh);
                oldNhanvien.Password = input.Password;
                _context.Users.Update(oldNhanvien);
                _context.SaveChanges();
            }
        }

        [HttpPost]
        public async void XoaNhanVien(NhanVienVM input)
        {
            var oldNhanvien = _context.Users.FirstOrDefault(x => x.Username == input.Username);
            if (oldNhanvien != null)
            {
                _context.Users.Remove(oldNhanvien);
                _context.SaveChanges();
            }
        }
    }
}
