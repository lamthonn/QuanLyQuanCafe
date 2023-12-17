using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuanLyQuanCafe.Migrations
{
    /// <inheritdoc />
    public partial class removeGioHoaDon : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "gio",
                table: "tbl_quanlyhoadon");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "gio",
                table: "tbl_quanlyhoadon",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
