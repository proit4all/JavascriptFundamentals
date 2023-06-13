const prompt = require("prompt-sync")();

let st = prompt("Nhap chuoi: ");

console.log(st);

let words = st.split(" ");
let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] !== "") {
    count++;
  }
}
console.log(`Tong so tu co trong chuoi: ${count}`);
