const bais = [];

function taoBai() {
  const loai = "ABCD";

  for (let i = 0; i < loai.length; i++) {
    for (let j = 1; j <= 13; j++) {
      bais.push(loai.charAt(i) + j);
    }
  }
}

function saoBai() {
  bais.sort((a, b) => Math.random() - 0.5);
}
function chiaBai1() {
  const nguoiChoi = [];
  for (let i = 0; i < 7; i++) {
    nguoiChoi.push(bais[i]);
  }

  console.log(nguoiChoi);
}
function chiaBai4() {
  const nguoiChoi1 = [],
    nguoiChoi2 = [],
    nguoiChoi3 = [],
    nguoiChoi4 = [];

  let i = 0;

  while (i < 52) {
    nguoiChoi1.push(bais[i]);
    i++;
    nguoiChoi2.push(bais[i]);
    i++;
    nguoiChoi3.push(bais[i]);
    i++;
    nguoiChoi4.push(bais[i]);
    i++;
  }

  console.log(nguoiChoi1);
  console.log(nguoiChoi2);
  console.log(nguoiChoi3);
  console.log(nguoiChoi4);
}

taoBai();
// console.log(bais);
saoBai();
// console.log(bais);
// chiaBai1();
chiaBai4();
