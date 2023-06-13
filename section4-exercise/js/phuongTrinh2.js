let a = nhap("Nhap gia tri cho a: ", 0);
let b = nhap("Nhap gia tri cho b: ", 0);
let c = nhap("Nhap gia tri cho c: ", 0);

function giaiPTBac2(a, b, c) {
  if (a === 0) {
    return giaiPTBac1(b, c);
  } else {
    //a <> 0
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
      return "Phuong trinh vo so nghiem";
    } else if (delta == 0) {
      let x = -b / (2 * a);
      return `Phuong trinh co nghiem kep x1 = x2 = ${x}`;
    } else {
      //delta > 0
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);

      return `Phuong trinh co hai nghiem phan biet: <br> 
            x1 = ${x1} <br>
            x2 = ${x2} <br>
        `;
    }
  }
}

let result = giaiPTBac2(a, b, c);

hienThi(result);
