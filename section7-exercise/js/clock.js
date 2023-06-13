let span1 = document.getElementById("digit1");
let span3 = document.getElementById("digit3");
let span5 = document.getElementById("digit5");

setInterval(hienThi, 1000);

function hienThi() {
  const now = new Date();

  const hours = now.getHours();
  span1.innerHTML = hours < 10 ? "0" + hours : hours;
  const minutes = now.getMinutes();
  span3.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  const seconds = now.getSeconds();
  span5.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}
