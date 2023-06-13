let nums = [1, 5, 6, 3, 2, 4, 7, 1];

console.log(nums);

let result = nums.find(function (item) {
  return item === 7;
});
let result2 = nums.find((item) => item === 7);

console.log(result);
console.log("result 2: ", result2);
