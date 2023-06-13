let array1 = [];
let array2 = new Array();

console.log(array2);
array2[0] = 1;
array2[1] = 2;
array2[2] = 4;
array2[3] = 5;
console.log(array2);

console.log(array1);

let names = ["Anh", "Hung", "Trang", "Minh"];
let newNames = new Array("Anh", "Hung", "Trang", "Minh");

console.log("new names: ", newNames);
console.log(newNames[1]);
newNames[2] = "TrangNew";
console.log(newNames);
console.log(names);
