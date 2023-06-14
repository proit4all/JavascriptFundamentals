
function Student(id, name, pointJS, pointHTML){
    this.id = id || "PD000";
    this.name = name || "No Name";
    this.pointJS = pointJS || 0.0;
    this.pointHTML = pointHTML || 0.0;
}

function sum() {
    console.log("in ra tong diem sinh vien");
}
function avg() {
    console.log("in ra điểm trung bình sinh viên");
}
function getInformation() {
    console.log("in ra thông tin sinh viên");
}

//thêm 1 thuộc tính
Student.prototype.age = 22;
//
Student.prototype.sum = sum;
Student.prototype.avg = avg;
Student.prototype.getInformation = getInformation;

// let st = new Student("PD001", "NamNV", 7,8);
// console.log(st);

// console.log(st.id);
// console.log(st.age);
// console.log(st.gender);
// st.sum();

//
function StudentWeb(id, name, pointJS, pointHTML, pointPHP) {
    Student.call(this,id, name, pointJS, pointHTML);
    this.pointPHP = pointPHP;
}
//
StudentWeb.prototype = Object.create(Student.prototype);
StudentWeb.prototype.sum = function () {
    let s = this.pointPHP + this.pointHTML + this.pointJS;
    console.log("Sum: "+ s);
}
let stWeb = new StudentWeb("PD111", "NamNV", 6,7,8);
console.log(stWeb);
console.log(stWeb.id);
stWeb.sum();

let st = new Student("PD222", "Student",6,7);
st.sum();