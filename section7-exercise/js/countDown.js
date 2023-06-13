let count = 1000;
const h1 = document.getElementById("countDown");

function startCount() {
  setTimeout(display, 1000);
}

function display() {
  h1.innerHTML = count;

  if (count >= 0) {
    setTimeout(display, 1000);
  }
  count--;
}
