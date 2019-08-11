console.log("working");

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

function timerIncrement() {


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
function convertTimerDisplay(num) {
    if (num <= 9) {
        return ("0" + num);
    } else {
        return num;
    }
}

// ****************************************************************************

// Q & A section
console.log("working");
// Question and answer choices appear on click
// click .points (any square with a points value) to make question appear
let pointsAmount = 0;
function clickQuestion() {
    // declare .points
    let pointsQuestions = document.querySelectorAll(".points");

    // create array for .points
    for (let i = 0; i < pointsQuestions.length; i++) {
        // add event listener to all .points
        pointsQuestions[i].addEventListener("click", (event) => {
            // create questionDisplay for containers
            let questionDisplay = document.createElement("div");
            questionDisplay.className = 'questionDisplay';
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

            // display on click
            if (questionDisplay.style.display = "none") {
                questionDisplay.style.display = "block";
            }
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
    // DOUBLE JEOPARDY
    // select random pointsQuestions array index
    doubleJeopardy = [Math.floor(Math.random() * pointsQuestions.length)];
    let twicePoints = pointsQuestions[doubleJeopardy];
    // twicePoints = 
    
    console.log(twicePoints);
    checkAnswer(twicePoints);
//     if ()
}
clickQuestion();

let totalPoints = 0;
// check if answer is correct or incorrect
function checkAnswer(cQA, questionDisplay, doubleJeopardy) {
    console.log(cQA);
    // check the box
    let answers = document.querySelectorAll(".answer");
    // console.log(doubleJeopardy);


    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", (event) => {
            // get point value from EVENT TARGET'S second index
            let pointsAmount = cQA[event.target.id][2];
            // twicePoints = pointsAmount * 2;
            
            
            // uses id of event  to grab second index of same array in object
            if (cQA[event.target.id][1] === true) {
                totalPoints += pointsAmount;
                // remove child and re-initiate clickQuestion();
                event.target.style.backgroundColor = "black";
                questionDisplay.parentNode.removeChild(questionDisplay);
            } else {
                totalPoints -= pointsAmount;
                // remove child and re-initiate clickQuestion();
                event.target.style.backgroundColor = "black";
                questionDisplay.parentNode.removeChild(questionDisplay);
            }
            pointsDisplay = document.getElementById("points")
            pointsDisplay = totalPoints;
        })
    }
}
// checkAnswer();

// ***********************************************************
// FINAL QUESTION