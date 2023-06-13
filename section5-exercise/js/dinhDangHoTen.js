const prompt = require("prompt-sync")();

let hoTen = prompt("Nhap ho ten: ");

console.log(hoTen.toLowerCase());

hoTen = hoTen.toLowerCase();
let dinhDangHoTen = "";
let kyTuHienTai = " ";

for (let i = 0; i < hoTen.length; i++) {
  let ch = hoTen.charAt(i);
  if (kyTuHienTai === " " && ch !== " ") {
    dinhDangHoTen = dinhDangHoTen.concat(ch.toUpperCase());
  } else {
    dinhDangHoTen = dinhDangHoTen.concat(ch);
  }
  kyTuHienTai = ch;
}

console.log(dinhDangHoTen);
