let st = "How are you today?";

let find = prompt("Nhap chuoi can tim: ");

if (st.toLowerCase().indexOf(find.toLowerCase()) > -1) {
  alert(`${find} duoc tim thay trong chuoi ${st}`);
} else {
  alert(`${find} khong duoc tim thay trong chuoi ${st}`);
}

if (st.toLowerCase().includes(find.toLowerCase())) {
  alert(`${find} duoc tim thay trong chuoi ${st}`);
} else {
  alert(`${find} khong duoc tim thay trong chuoi ${st}`);
}
