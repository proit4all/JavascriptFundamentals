const prompt = require("prompt-sync")();

let hoten = prompt("Nhap ho ten: ");

console.log(hoten);

if (hoten.startsWith("Nguyen") && hoten.endsWith("Anh")) {
  console.log(`${hoten} co ho: Nguyen va ten: Anh`);
} else {
  console.log(`${hoten} khong co ho Nguyen va ten Anh`);
}
