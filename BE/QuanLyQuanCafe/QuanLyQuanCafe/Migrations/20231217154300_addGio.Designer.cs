﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QuanLyQuanCafe.Data;

#nullable disable

namespace QuanLyQuanCafe.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20231217154300_addGio")]
    partial class addGio
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("QuanLyQuanCafe.Models.Ban", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Soban")
                        .HasColumnType("int");

                    b.Property<string>("TinhTrang")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("tbl_quanlyban", (string)null);
                });

            modelBuilder.Entity("QuanLyQuanCafe.Models.CaTruc", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("ThoiGian")
                        .HasColumnType("datetime2");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("Username");

                    b.ToTable("tbl_quanlycatruc", (string)null);
                });

            modelBuilder.Entity("QuanLyQuanCafe.Models.ChiTietHoaDon", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<float>("DonGia")
                        .HasColumnType("real");

                    b.Property<int>("Gio")
                        .HasColumnType("int");

                    b.Property<int>("HoaDonId")
                        .HasColumnType("int");

                    b.Property<DateTime>("NgayBan")
                        .HasColumnType("datetime2");

                    b.Property<int>("SanPhamId")
                        .HasColumnType("int");

                    b.Property<int>("SoLuong")
                        .HasColumnType("int");

                    b.Property<int>("Soban")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("HoaDonId");

                    b.ToTable("tbl_quanlychitiethoadon", (string)null);
                });

            modelBuilder.Entity("QuanLyQuanCafe.Models.HoaDon", b =>
                {
                    b.Property<int>("HoaDonId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("HoaDonId"));

                    b.Property<int>("Gio")
                        .HasColumnType("int");

                    b.Property<int>("SoBan")
                        .HasColumnType("int");

                    b.Property<float>("ThanhTien")
                        .HasColumnType("real");

                    b.Property<DateTime>("ngay")
                        .HasColumnType("datetime2");

                    b.HasKey("HoaDonId");

                    b.ToTable("tbl_quanlyhoadon", (string)null);
                });

            modelBuilder.Entity("QuanLyQuanCafe.Models.SanPham", b =>
                {
                    b.Property<int>("SanPhamId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SanPhamId"));

                    b.Property<float>("Gia")
                        .HasColumnType("real");

                    b.Property<float>("SoLuong")
                        .HasColumnType("real");

                    b.Property<string>("TenSanPham")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TrangThai")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SanPhamId");

                    b.ToTable("tbl_quanlysanpham", (string)null);
                });

            modelBuilder.Entity("QuanLyQuanCafe.Models.User", b =>
                {
                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("DiaChi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HoTen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgaySinh")
                        .HasColumnType("datetime2");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Username");

                    b.ToTable("tbl_quanlytaikhoan", (string)null);
                });

            modelBuilder.Entity("QuanLyQuanCafe.Models.CaTruc", b =>
                {
                    b.HasOne("QuanLyQuanCafe.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("Username")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("QuanLyQuanCafe.Models.ChiTietHoaDon", b =>
                {
                    b.HasOne("QuanLyQuanCafe.Models.HoaDon", "HoaDon")
                        .WithMany("chiTietHoaDons")
                        .HasForeignKey("HoaDonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("HoaDon");
                });

            modelBuilder.Entity("QuanLyQuanCafe.Models.HoaDon", b =>
                {
                    b.Navigation("chiTietHoaDons");
                });
#pragma warning restore 612, 618
        }
    }
}