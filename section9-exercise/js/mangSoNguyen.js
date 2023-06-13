const prompt = require("prompt-sync")();
const nums = [];

function taoMang() {
  for (let i = 0; i < 30; i++) {
    let rnd = 10 + Math.floor(Math.random() * 40);

    nums.push(rnd);
  }
}

function sapXepTang() {
  nums.sort();
}
function sapXepGiam() {
  nums.sort((a, b) => b - a);
}
function timSo() {
  let so = prompt("Nhap so nguyen: ");

  let soNguyen = Number(so);

  if (nums.indexOf(soNguyen) > -1) {
    console.log(`${soNguyen} duoc tim thay trong mang`);
  } else {
    console.log(`${soNguyen} khong duoc tim thay trong mang`);
  }
}

function timHienThi() {
  let newNums = nums.filter((element) => element > 40);

  console.log(newNums);
}

taoMang();
console.log(nums);

timHienThi();

// timSo();
// console.log(nums);

// sapXepGiam();

// console.log(nums);
