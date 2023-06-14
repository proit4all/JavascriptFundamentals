

// let student = {id:"PD001", name:"NamNV", age:30};
// // localStorage.setItem("STUDENT",JSON.stringify(student));
// //in ra
// let st = JSON.parse(localStorage.getItem("STUDENT"));
// console.log(st);

let students = [
    {id:"PD001", name:"NamNV1", age:30},
    {id:"PD002", name:"NamNV2", age:31},
    {id:"PD003", name:"NamNV3", age:32},
    {id:"PD004", name:"NamNV4", age:33},
    {id:"PD005", name:"NamNV5", age:34}
];
//save
// localStorage.setItem("STUDENTS",JSON.stringify(students));
//in ra
let arrStudent = JSON.parse(localStorage.getItem("STUDENTS"));
arrStudent.forEach(st => {
    console.log(st.id + " "+ st.name +" "+ st.age);
});