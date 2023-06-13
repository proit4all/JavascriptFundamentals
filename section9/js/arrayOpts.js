let nums = [1, 7, 5, 9];

console.log(nums);

nums.push(10);
console.log(nums);
nums.unshift(11);
console.log(nums);
let removedElement = nums.pop();
console.log("Removed element: ", removedElement);
console.log(nums);
let removedFirst = nums.shift();
console.log("removed first: ", removedFirst);
console.log(nums);
nums[1] = 20;
console.log(nums);
nums[5] = 30;
console.log(nums);

for (let i = 0; i < nums.length; i++) console.log(nums[i]);
