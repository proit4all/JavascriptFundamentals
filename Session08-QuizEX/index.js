
const correctAnswer = ["C", "A", "A", "B", "C"];//mang dap an
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit",event=>{
    event.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    // console.log(userAnswers);
    userAnswers.forEach((answer, index)=>{
        if (answer===correctAnswer[index]) {
            score++;
            questions[index].classList.add("correct");
        }else{
            questions[index].classList.add("wrong");
        }
    });
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You scored ${score}/5`
});