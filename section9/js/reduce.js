let nums = [1, 5, 3, 9, 7, 5, 6];

console.log(nums);

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);

let result = nums.reduce((sum, currentValue) => sum + currentValue, 0);
console.log("result ", result);
// let sum = 0;
// for (const item of nums) {
//   sum += item;
// }
// console.log(sum);
