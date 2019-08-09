console.log("working");
let points = 0;

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

// ******************************************************************************

// // // timer
// let seconds = 1
// let minutes = 0
// let hours = 0

// function timeIncrement() {
//     // increment timer function every second
//     window.setTimeout(timeIncrement, 1000)
//     if (seconds <= 59) {
//         // display time in .timer (display clock in top right corner)
//         document.querySelector(".timer").innerHTML = convertTimerDisplay(hours) + ":" + convertTimerDisplay(minutes) + ":" + convertTimerDisplay(seconds);
//         console.log(hours + ":" + minutes + ":" + seconds)
//         seconds++
//         // increment minutes once time is above 59
//     } else if (seconds = 59) {
//         minutes++
//         // displays seconds as zero instead of 60
//         seconds = 0;
//         document.querySelector(".timer").innerHTML = hours + ":" + convertTimerDisplay(minutes) + ":" + seconds;
//         console.log(hours + ":" + minutes + ":" + seconds);
//         // sets new value of seconds to 1 to begin incrementation again
//         seconds = 1;
//     } else if (minutes = 59) {
//         hours++
//         // displays minutes as 0, instead of 60
//         minutes = 0;
//         document.querySelector(".timer").innerHTML = convertTimerDisplay(hours) + ":" + minutes + ":" + seconds;
//         console.log(hours + ":" + minutes + ":" + seconds)
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



// Question appear on click
// click .points (any square with a points value) to make question appear
function clickQuestion() {
    // declare .points
    let pointsQuestions = document.querySelectorAll(".points");
    // create array for .points
    for (let i = 0; i < pointsQuestions.length; i++) {
        // add event listener to all .points
        pointsQuestions[i].addEventListener("click", (event) => {
            // declare .questionDisplay
            let questionDisplay = document.querySelector(".questionDisplay");
            console.log(questionDisplay)
            // display on click
            if (questionDisplay.style.display = "none") {
                questionDisplay.style.display = "block";
            }

            document.querySelector(".question").innerHTML = questionsCat1[event.target.dataset.index].question;
            document.querySelector(".answers1").innerHTML = questionsCat1[event.target.dataset.index].answer1;
            document.querySelector(".answers2").innerHTML = questionsCat1[event.target.dataset.index].answer2;
            document.querySelector(".answers3").innerHTML = questionsCat1[event.target.dataset.index].answer3;
            document.querySelector(".answers4").innerHTML = questionsCat1[event.target.dataset.index].answer4;
        })
    }
}
clickQuestion()

