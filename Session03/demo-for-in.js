

// In ra các thuộc tính của đối tượng student
let student = {id: "PD111", name:"NamNV", age: 30};
for(let st in student){
    console.log(student[st]);
}

// ví dụ 2
let arr = ["a1", "a2", "a3"];
for(let i in arr){
    console.log(i + "-" + arr[i]);
}