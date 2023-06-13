let nhapNam = () => {
  return Number(prompt("Nhap nam sinh: ", 2000));
};

let tinhTuoi = (namSinh) => {
  let now = new Date();

  return now.getFullYear() - namSinh + 1;
};

let hienThi = (tuoi) => {
  document.writeln(`Tuoi cua ban la: ${tuoi}`);
};

let year = nhapNam();

let age = tinhTuoi(year);

hienThi(age);
