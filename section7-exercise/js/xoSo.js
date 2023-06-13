let count = 100;

function batDau() {
  count = 100;

  for (let i = 1; i <= 6; i++) {
    const span = document.getElementById("num" + i);

    let handle = setInterval(() => quaySo(handle, span), 100);
  }
}

function quaySo(handle, span) {
  if (count < 0) {
    clearInterval(handle);
  }
  span.innerHTML = Math.floor(Math.random() * 10);
  count--;
}
