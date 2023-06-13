function add(a, b) {
  return a + b;
}

let add2 = (a, b) => {
  console.log("add two numbers");
  return a + b;
};

let add3 = (a, b) => a + b;

let display = (name) => {
  console.log("hello " + name);
};
let display2 = (name) => {
  console.log("Hello " + name);
};

display("AnhNN");
display2("HungNQ");

let result1 = add(5, 6);
console.log(result1);

let result2 = add3(5, 6);
console.log(result2);
