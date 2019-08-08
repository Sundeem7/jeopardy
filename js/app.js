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
            
            // let questionIndex = event.target.dataset.index;
            // let answer1Index = event.target.dataset.index;
            // let answer2Index = event.target.dataset.index;
            // let answer3Index = event.target.dataset.index;
            // let answer4Index = event.target.dataset.index;
            // console.log(questionIndex);
            // console.log(answer1Index);
            // console.log(answer2Index);
            // console.log(answer3Index);
            // console.log(answer4Index);

            // let questionText = questionsCat1[0].question
            // let answer1Text = questionsCat1[0].answer1[0]
            // let answer2Text = questionsCat1[0].answer2[0]
            // let answer3Text = questionsCat1[0].answer3[0]
            // let answer4Text = questionsCat1[0].answer4[0]
            // console.log(questionText);
            // console.log(answer1Text);
            // console.log(answer2Text);
            // console.log(answer3Text);
            // console.log(answer4Text);

            // document.querySelector(".question").innerHTML = questionText;
            // document.querySelector(".answers1").innerHTML = answer1Text;
            // document.querySelector(".answers2").innerHTML = answer2Text;
            // document.querySelector(".answers3").innerHTML = answer3Text;
            // document.querySelector(".answers4").innerHTML = answer4Text;

            document.querySelector(".question").innerHTML = questionsCat1[event.target.dataset.index].question;
        })
    }
}
clickQuestion()