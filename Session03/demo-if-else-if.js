// Xếp loại sinh viên
// Nếu điểm >= 8.0 và <=10 in ra xuất sắc
// Nếu điểm >= 6.5 và <8.0 in ra khá
// Nếu điểm >= 5.0 và <6.5 in ra trung bình
// Nếu điểm <5.0 in ra yếu

let point = 4;
if (point >= 8.0) {
  console.log("Xuat sac");
} else if (point >= 6.5) {
  console.log("Kha");
} else if (point >= 5) {
  console.log("Trung binh");
} else console.log("Yeu");
