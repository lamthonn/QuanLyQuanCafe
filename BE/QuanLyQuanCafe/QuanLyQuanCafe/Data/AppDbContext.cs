using Microsoft.EntityFrameworkCore;
using QuanLyQuanCafe.Models;
using System.Data;

namespace QuanLyQuanCafe.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Ban> Bans { get; set; }
        public DbSet<SanPham> Menu { get; set; }
        public DbSet<CaTruc> CaTrucs { get; set; }
        public DbSet<HoaDon> HoaDons { get; set; }
        public DbSet<SanPham> SanPhams { get; set; }
        public DbSet<ChiTietHoaDon> ChiTietHoaDons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .ToTable("tbl_quanlytaikhoan")
                .HasKey(x => x.Username);

            modelBuilder.Entity<Ban>()
                .ToTable("tbl_quanlyban")
                .HasKey(x => x.Id);

            modelBuilder.Entity<SanPham>()
                .ToTable("tbl_quanlysanpham")
                .HasKey(x => x.SanPhamId);

            modelBuilder.Entity<CaTruc>()
                .ToTable("tbl_quanlycatruc")
                .HasKey(x => x.Id);

            modelBuilder.Entity<HoaDon>()
                .ToTable("tbl_quanlyhoadon")
                .HasKey(x => x.HoaDonId);

            modelBuilder.Entity<ChiTietHoaDon>()
                .ToTable("tbl_quanlychitiethoadon")
                .HasKey(x => x.ID);

            modelBuilder.Entity<Ban>()
                .ToTable("tbl_quanlyban")
                .HasKey(x => x.Id);
        }
    }
}
