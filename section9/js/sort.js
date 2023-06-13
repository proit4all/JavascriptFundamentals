let nums = [1, 5, 6, 9, 4, 2, 3, 7, 1];

console.log(nums);

let newNums = nums.sort((a, b) => a - b);

console.log(newNums);

let desNums = nums.sort((a, b) => b - a);

console.log(desNums);
