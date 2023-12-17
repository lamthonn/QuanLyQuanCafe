using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuanLyQuanCafe.Migrations
{
    /// <inheritdoc />
    public partial class addGio : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Gio",
                table: "tbl_quanlyhoadon",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Gio",
                table: "tbl_quanlychitiethoadon",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Gio",
                table: "tbl_quanlyhoadon");

            migrationBuilder.DropColumn(
                name: "Gio",
                table: "tbl_quanlychitiethoadon");
        }
    }
}
