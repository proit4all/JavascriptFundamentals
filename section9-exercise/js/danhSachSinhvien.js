const prompt = require("prompt-sync")();
const ds = [
  { ma: 1, ten: "Anh", diem: 9 },
  { ma: 2, ten: "Hung", diem: 10 },
  { ma: 3, ten: "Trang", diem: 10 },
  { ma: 4, ten: "Minh", diem: 10 },
  { ma: 5, ten: "Thanh", diem: 8 },
  { ma: 6, ten: "Cuong", diem: 7 },
  { ma: 7, ten: "Tin", diem: 4 },
  { ma: 8, ten: "Trung", diem: 5 },
  { ma: 9, ten: "Hoa", diem: 6 },
  { ma: 10, ten: "Hanh", diem: 7 },
];

console.log(ds);

function nhap() {
  let ten = prompt("Nhap ten: ");
  const found = ds.find((element) => element.ten === ten);

  if (found) {
    console.log(`${ten} duoc tim thay trong danh sach`);
  } else {
    console.log(`${ten} khong duoc tim thay trong danh sach`);
  }
}

function hienThiSVXS() {
  let newDS = ds.filter((element) => element.diem >= 9);

  newDS.forEach((element) => {
    console.log(
      `Ma: ${element.ma} - Ten: ${element.ten} - Diem: ${element.diem}`
    );
  });
}

function tinhTB() {
  //   let sum = ds.reduce((acc, element) => acc + element.diem, 0);
  let sum = 0;
  for (const element of ds) {
    sum += element.diem;
  }

  return sum / ds.length;
}

function xoa() {
  let ma = prompt("Nhap ma sinh vien can xoa: ");

  let flag = false;
  for (let i = 0; i < ds.length; i++) {
    if (ds[i].ma === Number(ma)) {
      ds.splice(i, 1);
      flag = true;
      break;
    }
  }
  if (flag) {
    console.log(`${ma} da tim thay va xoa thanh cong`);
  } else {
    console.log(`${ma} khong tim thay trong danh sach`);
  }
}

//nhap();
// hienThiSVXS();
// console.log(`Diem trung binh: ${tinhTB()}`);
xoa();

console.log(ds);
