const prompt = require("prompt-sync")();

let n = parseInt(prompt("Nhap n: ", 0));

function giaiThua(n) {
  let gt = 1;

  for (let i = 1; i <= n; i++) {
    gt = gt * i;
  }
  return gt;
}

let result = giaiThua(n);

console.log(`Giai thua cua ${n} la ${result}`);
