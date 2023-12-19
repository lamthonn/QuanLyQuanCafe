using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuanLyQuanCafe.Data;
using QuanLyQuanCafe.Models;


namespace QuanLyQuanCafe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuanLyBanController: ControllerBase
    {
        public readonly AppDbContext _context;
        public QuanLyBanController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<QuanLyBanViewModel>> GetAllBan(string? key)
        {
            var data = _context.Bans.AsNoTracking();

            var result = data.Select(x => new QuanLyBanViewModel
            {
                ID = x.Id,
                SoBan = x.Soban,
                TinhTrang = x.TinhTrang,
            }).ToList();
            return result;
        }

        [HttpPut("{id}")]
        public async void SuaTrangThaiBan(QuanLyBanViewModel ban, int id)
        {
            var OldBan = _context.Bans.FirstOrDefault(x => x.Id == id);
            if (OldBan != null)
            {
                OldBan.TinhTrang = (string)ban.TinhTrang;
                _context.Bans.Update(OldBan);
                _context.SaveChanges();
            }
        }
    }
}
