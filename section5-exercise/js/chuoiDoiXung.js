let st = prompt("Nhap chuoi: ", "");

//alert(st);

let i = 0,
  j = st.length - 1;
let flag = true;
while (i <= j && flag) {
  if (st.charAt(i) !== st.charAt(j)) {
    flag = false;
  }
  i++;
  j--;
}

if (flag) {
  alert("Chuoi nhap vao la chuoi doi xung");
} else {
  alert("Chuoi nhap vao khong phai chuoi doi xung");
}
