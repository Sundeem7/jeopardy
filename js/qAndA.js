console.log("working");


// category questions (use data-index for correlation)
let categoryQAndA = [
    // Category 1
    {
        question: "Harry Potter",
        answer1: ["Veronica Roth", false],
        answer2: ["Cassandra Clare", false],
        answer3: ["JK Rowling", true],
        answer4: ["Laurel Hamilton", false],    
    },
    {
        question: "Katniss Everdeen",
        answer1: ["J.R.R. Tolkien", false],
        answer2: ["Cassandra Claire", false],
        answer3: ["James Dashner", false],
        answer4: ["Suzanne Collins", true]
    },
    {
        question: "Percy Jackson",
        answer1: ["George RR Martin", false],
        answer2: ["Christopher Paolini", false],
        answer3: ["Cassandra Clare", false],
        answer4: ["Rick Riordian", true]
    },
    {
        question: "Frodo Baggins",
        answer1: ["Veronica Roth", false],
        answer2: ["J.R.R. Tolkien", true],
        answer3: ["Cassandra Clare", false],
        answer4: ["James Dashner", false]
    },
    {
        question: "Thomas",
        answer1: "James Dashner",
        answer2: "Christopher Paolini",
        answer3: "Cassandra Clare",
        answer4: "Neil Gaiman",
        correct: "1"
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