

// ví dụ 1: làm việc với chuỗi string
let str = "javascript";
for(let value of str){
    console.log(value);
}

// ví dụ 2: làm việc mới mảng
let points = [8,7,9,5,3,2];
for(let point of points){
    console.log(point);
}

// ví dụ 3: làm việc với mảng đối tượng 
let students = [
    {name:"An", score: 9},
    {name:"Bao", score: 8},
    {name:"Binh", score:6},
    {name:"Nam", score:7}
]
//in thông tin
for(let student of students){
    for(let st in student){
        console.log(student[st]);
    }
}
//tính tổng điểm student
let sum = 0;
for(let {score} of students){
    // console.log(score);
    sum += score;
}
console.log("sum: "+ sum);
 
// ví dụ 4: khác nhau giữa for in và for of
let scores = [6,7,8,9];
console.log("for ... in");
for(let score in scores){
    console.log(score);
}
console.log("for ... of");
for(let score of scores){
    console.log(score);
}
