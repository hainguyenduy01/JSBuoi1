//Bai 1: Tinh luong
/*
    -Input: Nhap luong 1 ngay va so ngay lam viec 
    -Process:
      Tinh luong = luong * ngay lam
    -Output: Tong luong
*/
var luong = 100000;
var ngaylam = 28;
var tongluong = luong * ngaylam;
console.log('Tong luong trong thang la: ', tongluong);
//Bai 2: Tinh gia tri trung binh cua 5 so thuc
/*
 *  -Input: Nhap vao 5 so thuc
 *  -Process:
 *   Gia tri TB = (Tong cua 5 so )/5
 *  -Output: Gia tri trung binh
 */
var a = 6;
var b = 10;
var c = 7;
var d = 6;
var e = 8;
var tbc = (a + b + c + d + e) / 5;
console.log('Trung binh cong la: ', tbc);
//Bai 3:
/**
 * - Input: Nhập vào tỉ giá và số USD cần đổi sang tiền VND
 * - Process:
 *    Sổ tiền= Số USD * Tỉ giá
 * -Output: Số tiền sau khi quy đổi
 */
var vnd = 23500;
var usd = 9500;
var tongtien = vnd * usd;
console.log('Số tiền sau khi quy đổi từ USD sang VND là:', tongtien);
//Bai 4:
/**
 *  - Input: Nhập vào chiều dài và chiều rộng của hình chữ nhật
 *  - Process:
 *     Chu vi = (Chiều dài + Chiều rộng) *
 *     Diện tích = Chiều dài * Chiều rộng
 *  - Output: Chu vi và diện tích của HCN
 */
var chieuDai = 50;
var chieuRong = 25;
var chuVi = 2 * (chieuDai + chieuRong);
var dienTich = chieuDai * chieuRong;
console.log('Chu vi của hình chữ nhật là: ', chuVi);
console.log('Diện tích của hình chữ nhật là', dienTich);
//Bài 5
/**
 * -Input:  Nhập vào số n có 2 chữ số
 * -Process:
 *    Hàng đơn vị = n % 10;
 *    Hàng chục = Math.floor (n / 10);
 *    Tính tổng
 * - Output: Tổng 2 kí số
 */
var so = 59;
var hangChuc = Math.floor(so / 10);
var hangDonvi = so % 10;
var tong2so = hangDonvi + hangChuc;
console.log('Tổng 2 kí số là: ', tong2so);
