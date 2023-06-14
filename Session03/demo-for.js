


// for(let i = 0; i < 1000; i++){
//     console.log("Hello world: "+ i);
// }

// Viết chương trình tính trung bình cộng các số chia hết cho 3 < 1000
let sum = 0;
let count = 0;
for(let i = 0; i< 1000; i++){
    if (i % 3 === 0) {
        console.log(i);
        sum = sum + i;
        count++;
    }
}
console.log("sum:"+ sum);
console.log("count:"+ count);
console.log("TBC:" +(sum/count));