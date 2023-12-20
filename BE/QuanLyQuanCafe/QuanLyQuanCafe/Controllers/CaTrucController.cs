using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore;
using QuanLyQuanCafe.Data;
using QuanLyQuanCafe.Models;

namespace QuanLyQuanCafe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CaTrucController : Controller
    {
        public readonly AppDbContext _context;
        public CaTrucController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<List<CaTrucVM>> GetAllCaTruc(string? key)
        { 
            var data = _context.CaTrucs.AsNoTracking();

            if (!string.IsNullOrEmpty(key))
            {
                data = data.Where(x => x.ThoiGian.ToString("dd/MM/yyyy") == key);
            }

            var result = data.Select(x => new CaTrucVM
            {
                Id = x.Id,
                Username = x.Username,
                ThoiGian = x.ThoiGian.ToString("dd/MM/yyyy")
            }).ToList();
            return result;
        }
        [HttpPost]
        public async Task<CaTrucVM> AddCaTruc(CaTrucVM input)
        {
            var newCatruc = new CaTruc
            {
                ThoiGian = DateTime.Parse(input.ThoiGian),
                Username = input.Username
            };
            _context.CaTrucs.Add(newCatruc);
            await _context.SaveChangesAsync();
            return new CaTrucVM
            {
                ThoiGian = newCatruc.ThoiGian.ToString("dd/MM/yyyy"),
                Username = input.Username
            };
        }

        [HttpPut("{id}")]
        public async void SuaCaTruc(CaTrucVM input, int id)
        {
            var oldCatruc = _context.CaTrucs.FirstOrDefault(x => x.Id == id);
            if (oldCatruc != null)
            {
                oldCatruc.ThoiGian = DateTime.Parse(input.ThoiGian);
                oldCatruc.Username = input.Username;
                _context.CaTrucs.Update(oldCatruc);
                _context.SaveChanges();
            }
        }

        [HttpDelete("{id}")]
        public async void XoaCaTruc(int id)
        {
            var oldCatruc = _context.CaTrucs.FirstOrDefault(x => x.Id == id);
            if (oldCatruc != null)
            {
                _context.CaTrucs.Remove(oldCatruc);
                _context.SaveChanges();
            }
        }
    }
}
