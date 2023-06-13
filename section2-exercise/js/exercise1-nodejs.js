var prompt = require("prompt-sync")();

let dauKy = prompt("Nhap so chu dien dau ky: ");
let cuoiKy = prompt("Nhap so chu dien cuoi ky: ");

let numDK = Number(dauKy);
let numCK = Number(cuoiKy);

let chuDien = numCK - numDK;

console.log("So chu dien trong thang la: " + chuDien);
