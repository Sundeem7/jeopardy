console.log("working")

// ******************************************************************************

// TIMER
let seconds = 1
let minutes = 0
let hours = 0

let startButton = document.getElementById("start")
startButton.addEventListener("click", (event) => {
    let modalWindow = document.getElementById("modal");
    timerIncrement();
    if (modalWindow.style.display = "block") {
        modalWindow.style.display = "none";
    }
})

const timerIncrement = () => {

    // // lose after 5 mins
    // setTimeout(timerIncrement, { alert(); }, 10000);
    // increment timer function every second
    window.setTimeout(timerIncrement, 1000)
    if (seconds <= 59) {
        // display time in .timer (display clock in top right corner)
        document.querySelector(".timer").innerHTML = convertTimerDisplay(hours) + ":" + convertTimerDisplay(minutes) + ":" + convertTimerDisplay(seconds);
        seconds++
        // increment minutes once time is above 59
    } else if (seconds = 59) {
        minutes++
        // displays seconds as zero instead of 60
        seconds = 0;
        document.querySelector(".timer").innerHTML = hours + ":" + convertTimerDisplay(minutes) + ":" + seconds;
        // sets new value of seconds to 1 to begin incrementation again
        seconds = 1;
    } else if (minutes = 59) {
        hours++
        // displays minutes as 0, instead of 60
        minutes = 0;
        document.querySelector(".timer").innerHTML = convertTimerDisplay(hours) + ":" + minutes + ":" + seconds;
    }
}

// add "0" infront of numbers <= 9
const convertTimerDisplay = (num) => {
    if (num <= 9) {
        return ("0" + num);
    } else {
        return num;
    }
}


//************************************************************************ 


// Question and answer choices appear on click
// click .points (any square with a points value) to make question appear
let pointsAmount = 0;
const clickQuestion = () => {
    // declare .points
    let pointsQuestions = document.querySelectorAll(".points");

    // create array for .points
    for (let i = 0; i < pointsQuestions.length; i++) {
        // add event listener to all .points
        pointsQuestions[i].addEventListener("click", (event) => {
            // create questionDisplay for containers
            let questionDisplay = document.createElement("div");
            questionDisplay.className = "questionDisplay";
            // give id = incorrectAnswer
            questionDisplay.id = "questionOverlay";
            // create div inside new div for questions
            let question = document.createElement("div");
            question.className = 'question';
            // create answerContainer and 4 divs inside new div for answers (needs id)
            let answerContainer = document.createElement("div");
            answerContainer.className = "answerContainer"
            for (let i = 0; i < 4; i++) {
                let answer = document.createElement("div");
                answer.className = "answer";
                // grabs correct index number from answer array
                answer.id = `answer${i + 1}`;
                answer.setAttribute = ("data-answer", i);
                answerContainer.appendChild(answer);
            }
            // append question and answer to questionDisplay  
            questionDisplay.appendChild(question);
            questionDisplay.appendChild(answerContainer);
            // append questionDisplay to body
            document.getElementsByTagName('body')[0].appendChild(questionDisplay);
            // display Questions nad answers on click
            if (questionDisplay.style.display = "none") {
                questionDisplay.style.display = "block";
            }
            event.target.style.backgroundColor = "gray";
            event.target.style.color = "gray";
            event.target.style.pointerEvents = 'none';
            
            // grabs object containing onject at the data-index to use in function called checkAnswer
            // use below to quickly reference
            let cQA = categoryQAndA[event.target.dataset.index];
            // uploads the correct question and answers in the box correlation when clicked
            document.querySelector(".question").innerHTML = categoryQAndA[event.target.dataset.index].question;
            document.querySelector("#answer1").innerHTML = categoryQAndA[event.target.dataset.index].answer1[0];
            document.querySelector("#answer2").innerHTML = categoryQAndA[event.target.dataset.index].answer2[0];
            document.querySelector("#answer3").innerHTML = categoryQAndA[event.target.dataset.index].answer3[0];
            document.querySelector("#answer4").innerHTML = categoryQAndA[event.target.dataset.index].answer4[0];
            // use cQA and questionDisplay in function called checkAnswer
            checkAnswer(cQA, questionDisplay);
        })
    }
}

clickQuestion();

const getDoublePoints = () => {
    let pointsIndex = document.querySelectorAll(".points");
    randomIndex = Math.floor(Math.random() * pointsIndex.length);
    console.log(randomIndex);
}
getDoublePoints()


let totalPoints = 0;
// check if answer is correct or incorrect
const checkAnswer = (cQA, questionDisplay, cQArI) => {
    // check the box
    let answers = document.querySelectorAll(".answer");

    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", (event) => {

            let pointsAmount = cQA[event.target.id][2];
            // uses id of event  to grab second index of same array in object
            if (cQA[event.target.id][1] === true) {
                totalPoints += pointsAmount;
                // remove child and re-initiate clickQuestion();
                questionDisplay.parentNode.removeChild(questionDisplay);
                // create correct answer display
                let correctAnswer = document.createElement("div");
                // give class = correctAnswer
                correctAnswer.className = "correctAnswer";
                // give id = correctOverlay
                correctAnswer.id = "correctOverlay";
                // append questionDisplay to body
                document.getElementsByTagName('body')[0].appendChild(correctAnswer);
                // correct answer innerText
                document.querySelector(".correctAnswer").innerHTML = "You actually got one right, Morty!";

                // remove correct Answers on click
                let removecorrectAnswers = document.querySelector(".correctAnswer")
                function removeCAnswers() {
                    removecorrectAnswers.addEventListener("click", (event) => {
                        correctAnswer.parentNode.removeChild(correctAnswer);
                    })
                }
                removeCAnswers();
                document.getElementById("points").innerHTML = totalPoints;
            } else {
                totalPoints -= pointsAmount;
                // remove child and re-initiate clickQuestion();
                questionDisplay.parentNode.removeChild(questionDisplay);
                console.log(totalPoints);
                // create correct answer display
                let incorrectAnswer = document.createElement("div");
                // give class = correctAnswer
                incorrectAnswer.className = "incorrectAnswer";
                // give id = incorrectAnswer
                incorrectAnswer.id = "incorrectOverlay";
                // append questionDisplay to body
                document.getElementsByTagName('body')[0].appendChild(incorrectAnswer);
                // incorrect answer inner text
                document.querySelector(".incorrectAnswer").innerHTML = "You just cost us points, Morty!";
                // remove correct Answers on click
                let removeincorrectAnswers = document.querySelector(".incorrectAnswer")
                function removeICAnswers() {
                    removeincorrectAnswers.addEventListener("click", (event) => {
                        incorrectAnswer.parentNode.removeChild(incorrectAnswer);
                    })
                }
                removeICAnswers();
                document.getElementById("points").innerHTML = totalPoints;
                checkToWin();
            }
        })

    }
}

// ********************************************

// win and lose conditions
const checkToWin = () => {

    if (totalPoints >= 3000) {
        console.log("you win");
        alert("CONGRATS MORTY!!");
    } else if (totalPoints <= -500) {
        console.log("try again buddy");
        alert("MORTY... JUST STOP... YOU LOST!");
    }
}