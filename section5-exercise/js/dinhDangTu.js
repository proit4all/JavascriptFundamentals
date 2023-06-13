const prompt = require("prompt-sync")();

let st = prompt("Nhap chuoi: ");

console.log(st);

st = st.toLowerCase();

let ch = " ";
let fst = "";

for (let i = 0; i < st.length; i++) {
  let current = st.charAt(i);

  if (ch === " " && current !== " ") {
    fst = fst.concat(current.toUpperCase());
  } else {
    fst = fst.concat(current);
  }
  ch = current;
}

console.log(`Chuoi da duoc dinh dang cac tu: ${fst}`);
