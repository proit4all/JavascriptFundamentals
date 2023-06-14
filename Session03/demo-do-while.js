

// let number = 0;//b1
// do {
//     console.log("Hello world: "+ number);//b2
//     number++;//b3
// } while (number < 1000);//b4

// Viết chương trình tính trung bình cộng các số chia hết cho 3 < 1000

let number = 1;
let sum = 0;
let count = 0;
do {
    if (number % 3 === 0) {
        console.log(number);
        sum += number;
        count ++;
    }
    number++;
} while (number < 1000);
console.log("sum: "+ sum);
console.log("count:"+ count);
console.log("TBC:"+(sum/count));




