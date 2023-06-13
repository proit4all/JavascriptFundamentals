function xepLoai(diem) {
  if (diem && (diem < 0 || diem > 10)) {
    throw new RangeError(
      "Gia tri diem khong hop le. Diem phai nam trong khoang 0 -10"
    );
  }

  if (diem < 5) {
    return "Yeu";
  } else if (diem < 7) {
    return "Trung Binh";
  } else {
    return "Gioi";
  }
}

console.log(xepLoai(8));
try {
  console.log(xepLoai(-5));
} catch (error) {
  console.log(error.message);
}

// console.log(xepLoai(15));
// console.log(xepLoai(1));
