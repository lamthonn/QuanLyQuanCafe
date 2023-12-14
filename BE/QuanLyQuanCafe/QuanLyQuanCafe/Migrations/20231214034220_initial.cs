using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuanLyQuanCafe.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tbl_quanlyban",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Soban = table.Column<int>(type: "int", nullable: false),
                    TinhTrang = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_quanlyban", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tbl_quanlyhoadon",
                columns: table => new
                {
                    HoaDonId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SoBan = table.Column<int>(type: "int", nullable: false),
                    ThanhTien = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_quanlyhoadon", x => x.HoaDonId);
                });

            migrationBuilder.CreateTable(
                name: "tbl_quanlysanpham",
                columns: table => new
                {
                    SanPhamId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenSanPham = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gia = table.Column<float>(type: "real", nullable: false),
                    SoLuong = table.Column<float>(type: "real", nullable: false),
                    TrangThai = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_quanlysanpham", x => x.SanPhamId);
                });

            migrationBuilder.CreateTable(
                name: "tbl_quanlytaikhoan",
                columns: table => new
                {
                    Username = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HoTen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NgaySinh = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DiaChi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_quanlytaikhoan", x => x.Username);
                });

            migrationBuilder.CreateTable(
                name: "tbl_quanlychitiethoadon",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SanPhamId = table.Column<int>(type: "int", nullable: false),
                    NgayBan = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Soban = table.Column<int>(type: "int", nullable: false),
                    SoLuong = table.Column<int>(type: "int", nullable: false),
                    DonGia = table.Column<float>(type: "real", nullable: false),
                    HoaDonId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_quanlychitiethoadon", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tbl_quanlychitiethoadon_tbl_quanlyhoadon_HoaDonId",
                        column: x => x.HoaDonId,
                        principalTable: "tbl_quanlyhoadon",
                        principalColumn: "HoaDonId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tbl_quanlycatruc",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ThoiGian = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_quanlycatruc", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tbl_quanlycatruc_tbl_quanlytaikhoan_Username",
                        column: x => x.Username,
                        principalTable: "tbl_quanlytaikhoan",
                        principalColumn: "Username",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tbl_quanlycatruc_Username",
                table: "tbl_quanlycatruc",
                column: "Username");

            migrationBuilder.CreateIndex(
                name: "IX_tbl_quanlychitiethoadon_HoaDonId",
                table: "tbl_quanlychitiethoadon",
                column: "HoaDonId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tbl_quanlyban");

            migrationBuilder.DropTable(
                name: "tbl_quanlycatruc");

            migrationBuilder.DropTable(
                name: "tbl_quanlychitiethoadon");

            migrationBuilder.DropTable(
                name: "tbl_quanlysanpham");

            migrationBuilder.DropTable(
                name: "tbl_quanlytaikhoan");

            migrationBuilder.DropTable(
                name: "tbl_quanlyhoadon");
        }
    }
}
