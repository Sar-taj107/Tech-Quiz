
const correctAnswer = ["D", "B", "C", "B", "D", "A", "B", "D", "A", "B", "A", "C", "B", "C", "D", "C", "B", "C"];
const correctOptions = ["D", "B", "C", "B", "D", "A", "B", "D", "A", "B", "A", "C", "B", "C", "D", "C", "B", "C"];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  let score = 0;
  const userAnswers = [
    ...document.querySelectorAll("input[type=radio]:checked"),
  ].map((el) => el.value);

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 1;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");

      // Find the correct option and highlight it
      const options = questions[index].querySelectorAll(".option");
      options.forEach((option) => {
        const optionValue = option.querySelector("input").value;
        if (correctOptions[index] === optionValue) {
          option.classList.add("correct-option");
        }
      });
    }
  });

  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector(
    "p"
  ).textContent = `You scored ${score}/${userAnswers.length}!`;
});
