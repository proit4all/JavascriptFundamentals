
let number = 0;//b1
do {
    console.log("Hello world "+ number);//b2
    number++;//b3
} while (number < 1000);//b4



// Viết chương trình tính trung bình cộng các số chia hết cho 3 < 1000

let number1 = 1;
let sum = 0;
let count = 0;
while (number < 1000) {
    if (number % 3 == 0) {
        console.log(number);
        sum = sum + number;
        count++;
    }
    number++;
}
console.log("sum: "+ sum);
console.log("count: "+ count);
console.log("tbc:"+(sum/count));

