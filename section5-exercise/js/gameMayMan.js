const rnd = Math.floor(Math.random() * 101);

let guess = prompt("Nhap gia tri du doan: ", -1);

do {
  if (guess == rnd) {
    alert("Chuc mung ban da doan dung so may man");
    break;
  } else if (guess > rnd) {
    guess = prompt(`Nhap gia tri du doan nho hon ${guess}:`, -1);
  } else {
    guess = prompt(`Nhap gia tri du doan lon hon ${guess}:`, -1);
  }
} while (guess > -1 && guess <= 100);
