console.log("working");


// // timer
let secs = 1
let mins = 0
let hours = 0

function timeIncrement() {
    // increment timer function every second
    window.setTimeout(timeIncrement, 1000)
    if (secs <= 59) {
        // display time in .timer (display clock in top right corner)
        document.querySelector(".timer").innerHTML = hours + ":" + mins + ":" + secs;
        console.log(hours + ":" + mins + ":" + secs)
        secs++
        // increment mins once time is above 59
    } else if (secs = 59) {
        mins++
        // displays seconds as zero instead of 60
        secs = 0;
        document.querySelector(".timer").innerHTML = hours + ":" + mins + ":" + secs;
        console.log(hours + ":" + mins + ":" + secs);
        // sets new value of seconds to 1 to begin incrementation again
        secs = 1;
    } else if (mins = 59) {
        hours++
        // displays mins as 0, instead of 60
        mins = 0;
        document.querySelector(".timer").innerHTML = hours + ":" + mins + ":" + secs;
        console.log(hours + ":" + mins + ":" + secs)
    }
}
timeIncrement();



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
        })
    }
}
clickQuestion()

// function correctAnswer() {
// let correctAnswer = 

// }

// //questions categories
// let questionsCat1 = {
//     question: "Harry Potter",
//     answers: [
//         ["Rick Riordian", false],
//         ["Cassandra Clare", false],
//         ["JK Rowling", true],
//         ["Laurel Hamilton", false]
//     ]
// };