var prompt = require("prompt-sync")();

let tenSP = prompt("Nhap ten san pham: ");
let giaGoc = Number(prompt("Nhap gia goc: "));
let khuyenMai = Number(prompt("Nhap % khuyen mai: "));

let giaBan = giaGoc - (giaGoc * khuyenMai) / 100;

console.log("Ten san pham: " + tenSP);
console.log("Gia ban: " + giaBan);
console.log("Khuyen mai: " + khuyenMai + "%");
