var prompt = require("prompt-sync")();

let year = prompt("Nhap nam sinh: ");

let dob = Number(year);

let now = new Date();

let nowYear = now.getFullYear();

let age = nowYear - dob;

console.log("Tuoi cua sinh vien la: " + age);
