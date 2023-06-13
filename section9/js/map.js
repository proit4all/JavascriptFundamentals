let nums = [1, 2, 5, 4, 7, 3, 6, 8];

console.log(nums);

let newArs = nums.map(function (num) {
  return num * num;
});

console.log(newArs);

// let newObjs = nums.map((item) => {
//   return {
//     age: item,
//   };
// });

let newObjs = nums.map((item) => ({
  age: item,
  name: "Anh",
}));
console.log(newObjs);
