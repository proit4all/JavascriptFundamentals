const age = 30;
const name = "AnhNN";

function myTag(strings, name, age) {
  let st1 = strings[0];
  let st2 = strings[1];
  let st3 = strings[2];

  return `Process: ${st1} ${name} ${st2} ${age} ${st3}`;
}

let output = myTag`That ${name} is ${age}.`;

console.log(output);
