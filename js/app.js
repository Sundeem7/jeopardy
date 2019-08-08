console.log("working");

// // points
// let points = document.querySelector(".points");

// // timer
let seconds = 0
let mins = 0
let hours = 0

function timer() {
    // let timer = document.querySelector(".timer").innerHTML
    // seconds++
    // console.log(seconds);
    if (seconds < 60){
        seconds++
        console.log(seconds);
    } mins++
        if (mins < 60) {
            console.log(mins);
            hours++
        }

  }
  setTimeout(timer, 1000);
//   timer();
//   timer();
//   timer();
//   timer();
//   timer();
//   timer();
//   timer();
//   timer();
//   timer();


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