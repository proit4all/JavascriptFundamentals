let kiemTraNguyenTo = (a) => {
  if (a <= 1) return false;

  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }

  return true;
};

let num = parseInt(prompt("Nhap so nguyen can kiem tra nguyen to: ", 0));

if (kiemTraNguyenTo(num)) {
  document.writeln(`So ${num} la so nguyen to`);
} else {
  document.writeln(`So ${num} la khong phai so nguyen to`);
}
