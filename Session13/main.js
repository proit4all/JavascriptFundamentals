
const countDigit = document.querySelectorAll(".count-digit");
const timerValue = 10 * 60;
let countDownTime = timerValue;
let timerID;
let isStopped = true;

const replaceTimer = ()=>{
    let minutes = String(Math.trunc(countDownTime / 60));
    let seconds = String(countDownTime % 60);
    
    if (minutes.length ===1) {
        minutes = "0"+minutes;
    }
    if (seconds.length ===1) {
        seconds = "0"+seconds;
    }
    console.log(minutes+":"+seconds);
    return minutes+seconds;
}
const renderTimeHTML = ()=>{
    const time = replaceTimer();
    countDigit.forEach((count, index) => {
        count.innerHTML = time.charAt(index);
      });
};
const runCountDown = ()=>{
    countDownTime -= 1;
    //replaceTimer();
    renderTimeHTML();
    if (countDownTime === 0) {
        clearInterval(timerID);
    }
}

const startTimer = ()=>{
    if (isStopped) {
        isStopped = false;
        timerID = setInterval(runCountDown, 1000);
    }
};
startTimer();