function nhap(message, defaultValue) {
  return Number(prompt(message, defaultValue));
}
function tinh(soDK, soCK) {
  return soCK - soDK;
}
function hienThi(soDK, soCK, soChudien) {
  document.writeln(`So dien dau ky: ${soDK} <br>`);
  document.writeln(`So dien cuoi ky: ${soCK} <br>`);
  document.writeln(`So dien trong thang: ${soChudien} <br>`);
}
let soDK = nhap("Nhap so chu dien dau ky: ", 0);
let soCK = nhap("Nhap so chu dien cuoi ky: ", 0);

let soChudien = tinh(soDK, soCK);

hienThi(soDK, soCK, soChudien);
