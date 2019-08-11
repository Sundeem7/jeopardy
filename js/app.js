console.log("working")
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


            randomIndex = [Math.floor(Math.random() * categoryQAndA.length)];
            console.log(randomIndex);
            console.log(categoryQAndA[randomIndex])
        })
    }
    // DOUBLE JEOPARDY
    // select random pointsQuestions array index
    // randomIndex = [Math.floor(Math.random() * pointsQuestions.length)];
    // console.log(randomIndex);
    // console.log(pointsQuestions[randomIndex]);
    // console.log(categoryQAndA);
    // console.log(categoryQAndA[randomIndex]);
    
    
    // console.log(categoryQAndA[randomIndex][event.target.id]);
    // let cQArI = categoryQAndA[randomIndex];
    // checkAnswer(cQArI);
    // console.log(categoryQAndA);
//     if (cQArI === cQA[event.target]) {
//         doubleJeopardy;

}

clickQuestion();



let totalPoints = 0;
// check if answer is correct or incorrect
function checkAnswer(cQA, questionDisplay, cQArI) {
    // console.log(cQA[event.target]);
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
                    console.log(totalPoints);
                } else {
                    totalPoints -= pointsAmount;
                    // remove child and re-initiate clickQuestion();
                    questionDisplay.parentNode.removeChild(questionDisplay);
                    console.log(totalPoints);
                }
                // pointsDisplay = document.getElementById("points")
                // pointsDisplay = totalPoints;
            // }

        })
    }
    
}
// checkAnswer();