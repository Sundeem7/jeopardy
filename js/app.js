console.log("working");



// function myFunction() {
//     document.getElementById("demo").innerHTML = "Iframe is loaded.";
//   }
// // correct question
// function addPoints() {
//     // add points to total points
//     let addTotalPoints = Number(document.querySelectorAll(".points").parentNode.value);
//     // add points if answer is correct
//     totalPoints += addTotalPoints;
//     // add number from Parent node to total points
//     document.querySelectorAll(".points").innerHTML = Number(totalPoints);
//     console.log(totalPoints)
// }

// gets point value from parent Node 
// function grabPoints() {
//     let pointsAmount = document.querySelectorAll("myLI").parentNode.nodeName;
//     document.getElementById("demo").innerHTML = x;

// function grabsPoints(event) {
//     let pointsAmount = event.target.innerText;
//     console.log(pointsAmount);
// }

// if (categoryQAndA[event.target.dataset.index].answer1[1] === true) {
//     points = 
// }

// ******************************************************************************

// // timer
// let seconds = 1
// let minutes = 0
// let hours = 0

// function timeIncrement() {
//     // increment timer function every second
//     window.setTimeout(timeIncrement, 1000)
//     if (seconds <= 59) {
//         // display time in .timer (display clock in top right corner)
//         document.querySelector(".timer").innerHTML = convertTimerDisplay(hours) + ":" + convertTimerDisplay(minutes) + ":" + convertTimerDisplay(seconds);
//         seconds++
//         // increment minutes once time is above 59
//     } else if (seconds = 59) {
//         minutes++
//         // displays seconds as zero instead of 60
//         seconds = 0;
//         document.querySelector(".timer").innerHTML = hours + ":" + convertTimerDisplay(minutes) + ":" + seconds;
//         // sets new value of seconds to 1 to begin incrementation again
//         seconds = 1;
//     } else if (minutes = 59) {
//         hours++
//         // displays minutes as 0, instead of 60
//         minutes = 0;
//         document.querySelector(".timer").innerHTML = convertTimerDisplay(hours) + ":" + minutes + ":" + seconds;
//     }
// }
// timeIncrement();

// // add "0" infront of numbers <= 9
// function convertTimerDisplay(num) {
//     if (num <= 9) {
//         return ("0" + num);
//     } else {
//         return num;
//     }
// }

// ****************************************************************************

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
            // declare .questionDisplay
            let questionDisplay = document.querySelector(".questionDisplay");
            let pointsAmount = event.target.innerText;
            
            // display on click
            if (questionDisplay.style.display = "none") {
                questionDisplay.style.display = "block";
            }
            // uploads the correct question and answers in the box correlation when clicked
            document.querySelector(".question").innerHTML = categoryQAndA[event.target.dataset.index].question;
            document.querySelector(".answers1").innerHTML = categoryQAndA[event.target.dataset.index].answer1[0];
            document.querySelector(".answers2").innerHTML = categoryQAndA[event.target.dataset.index].answer2[0];
            document.querySelector(".answers3").innerHTML = categoryQAndA[event.target.dataset.index].answer3[0];
            document.querySelector(".answers4").innerHTML = categoryQAndA[event.target.dataset.index].answer4[0];
            checkAnswer(Number(pointsAmount));
        })
        
    }
}
clickQuestion();

let totalPoints = 0;
// check if answer is correct or incorrect
function checkAnswer(pointsAmount) {
    //let pointsAmount = event.target.innerText;
    let answers = document.querySelectorAll(".answers");

    for (let i = 0; i < answers.length; i++) {

        answers[i].addEventListener("click", (event) => {
console.log(answers[i]);
        if (categoryQAndA[event.target.dataset.index].answer1[1] === true) {
            console.log(categoryQAndA[event.target.dataset.index].answer1[1])
            totalPoints += pointsAmount;
            console.log(totalPoints)
        } else {
            totalPoints -= pointsAmount;
            console.log(totalPoints)
        }
        })
    }
}
// checkAnswer();
