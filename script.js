<<<<<<< HEAD
const correctAnswer = ["D", "B", "C", "B", "D", "A","B"];
=======
const correctAnswer = ["D", "B", "C", "B", "D", "A", "B"];
>>>>>>> bd817a02a16c37626813d7c2e905c865a36c8562
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions=document.querySelectorAll(".question");

form.addEventListener("submit", event => {
    event.preventDefault();

    let score=0;
<<<<<<< HEAD
    //const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value];
    const userAnswers = [...document.querySelectorAll('input[type=radio]:checked')].map(el => el.value);
=======
    const userAnswers = [...document.querySelectorAll('input[type=radio]:checked')].map(el => el.value);

>>>>>>> bd817a02a16c37626813d7c2e905c865a36c8562
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
        score += 1;
        questions[index].classList.add("correct"); 
        } else {
        questions[index].classList.add("wrong");
    }
    });
    
    scrollTo(0,0);
    result.classList.remove("hide");
<<<<<<< HEAD
    //result.querySelector("p").textContent = `You scored ${score}/6!`;
=======
>>>>>>> bd817a02a16c37626813d7c2e905c865a36c8562
    result.querySelector("p").textContent = `You scored ${score}/${userAnswers.length}!`;
});
