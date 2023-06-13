const prompt = require("prompt-sync")();

let st = prompt("Nhap chuoi: ");

console.log(st);

let ch = " ";
let count = 0;

for (let i = 0; i < st.length; i++) {
  let current = st.charAt(i);

  if (current !== " " && ch === " ") {
    count++;
  }

  ch = current;
}

console.log(`Tong so tu hien co trong chuoi: ${count}`);
