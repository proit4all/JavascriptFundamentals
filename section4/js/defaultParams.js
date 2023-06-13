function add(a, b = 0) {
  return a + b;
}

let a = 4,
  b = 5;

let result = add(a, b);

console.log(`a + b = ${result}`);

let result1 = add(a);
console.log(`a + b = ${result1}`);
