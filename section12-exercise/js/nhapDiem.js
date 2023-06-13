function kiemTra(diem) {
  if (diem && (diem < 0 || diem > 10)) {
    throw new Error("Diem khong hop le. Diem phai nam trong khoang tu 0-10");
  }

  return diem;
}
function nhap() {
  let flag = true;
  let diem = 0;
  do {
    diem = prompt("Nhap diem: ");
    flag = true;
    try {
      diem = kiemTra(Number(diem));
    } catch (error) {
      flag = false;
      alert(error.message);
    }
  } while (!flag);

  alert(`Diem vua nhap la : ${diem}`);
}

nhap();
