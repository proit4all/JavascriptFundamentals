function nhap(message, defaultValue) {
  return Number(prompt(message, defaultValue));
}

function hienThi(value) {
  document.writeln(`${value} <br>`);
}
//ax + b = 0
function giaiPTBac1(a, b) {
  if (a == 0) {
    if (b == 0) {
      return "Phuong trinh vo so nghiem";
    } else {
      return "Phuong trinh vo nghiem";
    }
  } else {
    let x = -b / a;

    return `Nghiem cua phuong trinh la ${x}`;
  }
}

// let a = nhap("Nhap gia tri cua a: ", 0);
// let b = nhap("Nhap gia tri cua b: ", 0);

// let result = giaiPTBac1(a, b);

// hienThi(result);
