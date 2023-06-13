let form = document.forms["myform"];

console.log(form);

form.elements[0].value = "Hello";

for (let i = 0; i < form.length; i++) {
  let element = form.elements[i];

  element.value = `value ${i}`;
}
