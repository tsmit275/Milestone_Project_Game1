
function checkAnswer(userChoice) {
    var correctAnswer = "answer-2"; // Change this to the correct answer
    var feedbackElement = document.getElementById("feedback");

    if (userChoice === correctAnswer) {
        feedbackElement.textContent = "You chose the correct answer!";
    } else {
        feedbackElement.textContent = "This is not the correct answer.";
    }
}



