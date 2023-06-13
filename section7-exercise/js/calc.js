let number1 = document.form.number1;
let number2 = document.form.number2;

let result = document.getElementById("result");

function add() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);

  result.innerHTML = num1 + num2;
}
function sub() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);

  result.innerHTML = num1 - num2;
}
function mult() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);

  result.innerHTML = num1 * num2;
}
function divide() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);

  result.innerHTML = num1 / num2;
}
