const prompt = require("prompt-sync")();

let st = prompt("Nhap chuoi: ");

console.log(st);

let countA = 0,
  countU = 0,
  countI = 0,
  countE = 0,
  countO = 0;
for (let i = 0; i < st.length; i++) {
  let ch = st.charAt(i);

  if (ch.toLowerCase() === "a") countA++;
  else if (ch.toLowerCase() === "i") countI++;
  else if (ch.toLowerCase() === "e") countE++;
  else if (ch.toLowerCase() === "o") countO++;
  else if (ch.toLowerCase() === "u") countU++;
}

console.log(`So lan xuat hien cua a : ${countA}`);
console.log(`So lan xuat hien cua i : ${countI}`);
console.log(`So lan xuat hien cua u : ${countU}`);
console.log(`So lan xuat hien cua e : ${countE}`);
console.log(`So lan xuat hien cua o : ${countO}`);
