let ten = prompt("Nhap vao ten: ");
let bacLuong = Number(prompt("Nhap bac luong: "));

const luongCB = 5000;

let luong = luongCB * bacLuong;

let info = `
    Ten cua nhan vien: ${ten} \n
    Luong cua nhan vien: ${luong}
`;
alert(info);
