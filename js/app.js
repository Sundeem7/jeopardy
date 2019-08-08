console.log("working");

// // points
// let points = document.querySelector(".points");

// // timer
let secs = 1
let mins = 0
let hours = 0

// function timer() {
//     // for (seconds = 0; seconds < 60; seconds++) {
//     console.log(seconds)
//     // }
// }
// setTimeout(timer, 1000);
function timer() {
    window.setTimeout(timer, 1000)
if (secs <= 59) {
    console.log(hours + ":" + mins + ":" + secs)
    secs++
} else if (secs = 59) {
    mins++
    secs = 0;
    console.log(hours + ":" + mins + ":" + secs);
    secs = 1;    
} else if (mins = 59) {
    hours++
    mins = 0;
    console.log(hours + ":" + mins + ":" + secs)
}
}
// } if (secs = 60) {
//     console.log(mins)
//     }
//     mins++


timer();

// function hello() {
//   console.log("Hello");
//   window.setTimeout(hello, 5000);
// }
// hello();


// for (seconds = 0; seconds < 60; seconds++) {
//     timer(seconds)
// console.log(seconds)
// }



// click .points(any square with a points value) to make question appear
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