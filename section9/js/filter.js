let nums = [1, 5, 6, 8, 7, 1, 2, 7, 9];
console.log(nums);

let newnums = nums.filter(function (num) {
  return num >= 5;
});

console.log(newnums);

let newNums2 = nums.filter((item) => item < 3);

console.log(newNums2);
