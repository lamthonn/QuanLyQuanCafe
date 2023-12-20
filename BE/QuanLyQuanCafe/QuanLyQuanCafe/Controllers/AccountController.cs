using Microsoft.AspNetCore.Mvc;
using QuanLyQuanCafe.Data;

namespace QuanLyQuanCafe.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : Controller
    {
        public readonly AppDbContext _context;
        public AccountController(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult Login([FromBody] Account input)
        {
            var user = _context.Users.FirstOrDefault(x => x.Username.Equals(input.username) && x.Password.Equals(input.password));
            if (user != null)
            {
                string role = (user.Role == "admin") ? "admin" : "employee";
                return Ok(new { message = "Đăng nhập thành công", role = role, success = true });
            }
            else
            {
                return BadRequest(new { message = "Tài khoản hoặc mật khẩu không chính xác!", success = false });
            }
        }
    }
}
