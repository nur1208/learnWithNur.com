const questions = document.querySelectorAll("#question");
const modeBtn = document.querySelector("#switch-modes-btn");
const answers = document.querySelectorAll("#answer");
const answerCheck = document.querySelector("#answer");
const onlyQModeBtn = document.querySelector("#only-q-mode-btn");

function switchModes() {
  if (modeBtn.textContent.trim().localeCompare("Normal Mode") === 0) {
    questions.forEach((question) => {
      question.setAttribute("style", "display: none;");
    });
    modeBtn.innerHTML = "Q&A Mode";
  } else {
    questions.forEach((question) => {
      question.removeAttribute("style");
    });
    modeBtn.innerHTML = "Normal Mode";
  }
  if(answerCheck.classList.contains("display-none-question")){
    answers.forEach((answer) => {
        answer.classList.remove("display-none-question");
      });
      onlyQModeBtn.removeAttribute("style")
  }
}

function activeOnlyQMode() {
  answers.forEach((answer) => {
    answer.classList.add("display-none-question");
  });
  onlyQModeBtn.setAttribute("style", "display: none;");
  if (modeBtn.textContent.trim().localeCompare("Q&A Mode") === 0){
    questions.forEach((question) => {
        question.removeAttribute("style");
      });
      modeBtn.innerHTML = "Normal Mode";
  }
  // console.log("activeOnlyQMode is connected")
}
