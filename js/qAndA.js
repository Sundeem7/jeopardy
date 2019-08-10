console.log("working");


// category questions (use data-index for correlation)
let categoryQAndA = [
//     "cat1": [
//         {
//             question: "Harry Potter",
//             answers: ["Veronica Roth", "Cassandra Clare", "JK Rowling", "Laurel Hamilton"],
//             correctAnswerIndex: 3,
//             points: 100
//         },
//         {
//             question: "Katniss Everdeen",
//             answers: ["J.R.R. Tolkien", "Cassandra Clare", "James Dashner", "Suzanne Collins"],
//             correctAnswerIndex: 4,
//             points: 200
//         },
//         {
//             question: "Percy Jackson",
//             answers: ["George RR Martin", "Christopher Paolini", "Cassandra Claire", "Rick Riordiann"],
//             correctAnswerIndex: 4,
//             points: 300
//         },
//         {
//             question: "Frodo Baggins",
//             answers: ["Veronica Roth", "J.R.R. Tolkien", "Cassandra Claire", "James Dashner"],
//             correctAnswerIndex: 2,
//             points: 400
//         },
//         {
//             question: "Thomas",
//             answers: ["James Dashner", "Christopher Paolini", "Cassandra Claire", "Neil Gaiman"],
//             correctAnswerIndex: 1,
//             points: 500
//         }
//     ]
    
// }
    // Category 1
    {
        question: "Harry Potter",
        answer1: ["Veronica Roth", false, 100],
        answer2: ["Cassandra Clare", false, 100],
        answer3: ["JK Rowling", true , 100],
        answer4: ["Laurel Hamilton", false, 100],    
    },
    {
        question: "Katniss Everdeen",
        answer1: ["J.R.R. Tolkien", false, 200],
        answer2: ["Cassandra Claire", false, 200],
        answer3: ["James Dashner", false, 200],
        answer4: ["Suzanne Collins", true, 200]
    },
    {
        question: "Percy Jackson",
        answer1: ["George RR Martin", false, 300],
        answer2: ["Christopher Paolini", false, 300],
        answer3: ["Cassandra Clare", false, 300],
        answer4: ["Rick Riordian", true, 300]
    },
    {
        question: "Frodo Baggins",
        answer1: ["Veronica Roth", false, 400],
        answer2: ["J.R.R. Tolkien", true, 400],
        answer3: ["Cassandra Clare", false, 400],
        answer4: ["James Dashner", false, 400]
    },
    {
        question: "Thomas",
        answer1: ["James Dashner", true, 500],
        answer2: ["Christopher Paolini", false, 500],
        answer3: ["Cassandra Clare", false, 500],
        answer4: ["Neil Gaiman", false, 500]
    },
    // Category 2
    {
        question: "Ariel",
        answer1: "The Little Mermaid",
        answer2: "Sleeping Beauty",
        answer3: "Aladdin",
        answer4: "Snow White and the Seven Dwarfs",
        correct: "1"
    },
    {
        question: "Jasmine",
        answer1: "Princess and the Frog",
        answer2: "Frozen",
        answer3: "Aladdin",
        answer4: "Star Wars",
        correct: "3"
    },
    {
        question: "Tiana",
        answer1: "Princess and the Frog",
        answer2: "Finding Nemo",
        answer3: "Inside Out",
        answer4: "Toy Story",
        correct: "1"
    },
    {
        question: "Belle",
        answer1: "The Lion King",
        answer2: "Beauty and the Beast",
        answer3: "A Wrinkle in Time",
        answer4: "A Bug's Life",
        correct: "2"
    },
    {
        question: "Merida",
        answer1: "Wreck It Ralph",
        answer2: "The Nutcracker",
        answer3: "The Incredibles",
        answer4: "Brave",
        correct: "4"
    },
    // Category 3
    {
        question: "Ariel",
        answer1: "The Little Mermaid",
        answer2: "Sleeping Beauty",
        answer3: "Aladdin",
        answer4: "Snow White and the Seven Dwarfs",
        correct: "1"
    },
    {
        question: "Jasmine",
        answer1: "Princess and the Frog",
        answer2: "Frozen",
        answer3: "Aladdin",
        answer4: "Star Wars",
        correct: "3"
    },
    {
        question: "Tiana",
        answer1: "Princess and the Frog",
        answer2: "Finding Nemo",
        answer3: "Inside Out",
        answer4: "Toy Story",
        correct: "1"
    },
    {
        question: "Belle",
        answer1: "The Lion King",
        answer2: "Beauty and the Beast",
        answer3: "A Wrinkle in Time",
        answer4: "A Bug's Life",
        correct: "2"
    },
    {
        question: "Merida",
        answer1: "Wreck It Ralph",
        answer2: "The Nutcracker",
        answer3: "The Incredibles",
        answer4: "Brave",
        correct: "4"
    },
    // Category 4
    {
        question: "Ariel",
        answer1: "The Little Mermaid",
        answer2: "Sleeping Beauty",
        answer3: "Aladdin",
        answer4: "Snow White and the Seven Dwarfs",
        correct: "1"
    },
    {
        question: "Jasmine",
        answer1: "Princess and the Frog",
        answer2: "Frozen",
        answer3: "Aladdin",
        answer4: "Star Wars",
        correct: "3"
    },
    {
        question: "Tiana",
        answer1: "Princess and the Frog",
        answer2: "Finding Nemo",
        answer3: "Inside Out",
        answer4: "Toy Story",
        correct: "1"
    },
    {
        question: "Belle",
        answer1: "The Lion King",
        answer2: "Beauty and the Beast",
        answer3: "A Wrinkle in Time",
        answer4: "A Bug's Life",
        correct: "2"
    },
    {
        question: "Merida",
        answer1: "Wreck It Ralph",
        answer2: "The Nutcracker",
        answer3: "The Incredibles",
        answer4: "Brave",
        correct: "4"
    },
    // Category 5
    {
        question: "Ariel",
        answer1: "The Little Mermaid",
        answer2: "Sleeping Beauty",
        answer3: "Aladdin",
        answer4: "Snow White and the Seven Dwarfs",
        correct: "1"
    },
    {
        question: "Jasmine",
        answer1: "Princess and the Frog",
        answer2: "Frozen",
        answer3: "Aladdin",
        answer4: "Star Wars",
        correct: "3"
    },
    {
        question: "Tiana",
        answer1: "Princess and the Frog",
        answer2: "Finding Nemo",
        answer3: "Inside Out",
        answer4: "Toy Story",
        correct: "1"
    },
    {
        question: "Belle",
        answer1: "The Lion King",
        answer2: "Beauty and the Beast",
        answer3: "A Wrinkle in Time",
        answer4: "A Bug's Life",
        correct: "2"
    },
    {
        question: "Merida",
        answer1: "Wreck It Ralph",
        answer2: "The Nutcracker",
        answer3: "The Incredibles",
        answer4: "Brave",
        correct: "4"
    }
]