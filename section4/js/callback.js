function display(value) {
  document.getElementById("result").innerHTML = value;
}
function add(a, b) {
  return a + b;
}
function add2(a, b, render) {
  let c = a + b;

  render(`a + b = ${c}`);
  return c;
}
add2(4, 6, display);

// display("AnhNN");

// display(add(4, 5));
