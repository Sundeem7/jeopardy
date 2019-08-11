console.log("working");


// category questions (use data-index for correlation)
let categoryQAndA = [
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
        answer1: ["The Little Mermaid", true, 100],
        answer2: ["Sleeping Beauty", false, 100],
        answer3: ["Aladdin", false, 100],
        answer4: ["Snow White and the Seven Dwarfs", false, 100]
    },
    {
        question: "Jasmine",
        answer1: ["Princess and the Frog", false, 200],
        answer2: ["Frozen", false, 200],
        answer3: ["Aladdin", true, 200],
        answer4: ["Star Wars", false, 200]
    },
    {
        question: "Tiana",
        answer1: ["Princess and the Frog",  true, 300],
        answer2: ["Finding Nemo", false, 300],
        answer3: ["Inside Out", false, 300],
        answer4: ["Toy Story", false, 300],
    },
    {
        question: "Belle",
        answer1: ["The Lion King", false, 400],
        answer2: ["Beauty and the Beast", true, 400],
        answer3: ["A Wrinkle in Time", false, 400],
        answer4: ["A Bug's Life", false, 400],
    },
    {
        question: "Merida",
        answer1: ["Wreck It Ralph", false, 500],
        answer2: ["The Nutcracker", false, 500],
        answer3: ["The Incredibles", false, 500],
        answer4: ["Brave", true, 500],
    },
    // Category 3
    {
        question: "",
        answer1: ["", false, 100],
        answer2: ["", false, 100],
        answer3: ["", false, 100],
        answer4: ["", false, 100],
    },
    {
        question: "",
        answer1: ["", false, 200],
        answer2: ["", false, 200],
        answer3: ["", false, 200],
        answer4: ["", false, 200],
    },
    {
        question: "",
        answer1: ["", false, 300],
        answer2: ["", false, 300],
        answer3: ["", false, 300],
        answer4: ["", false, 300],
    },
    {
        question: "",
        answer1: ["", false, 400],
        answer2: ["", false, 400],
        answer3: ["", false, 400],
        answer4: ["", false, 400],
    },
    {
        question: "",
        answer1: ["", false, 500],
        answer2: ["", false, 500],
        answer3: ["", false, 500],
        answer4: ["", false, 500],
    },
    // Category 4
    {
        question: "",
        answer1: ["", false, 100],
        answer2: ["", false, 100],
        answer3: ["", false, 100],
        answer4: ["", false, 100],
    },
    {
        question: "",
        answer1: ["", false, 200],
        answer2: ["", false, 200],
        answer3: ["", false, 200],
        answer4: ["", false, 200],
    },
    {
        question: "",
        answer1: ["", false, 300],
        answer2: ["", false, 300],
        answer3: ["", false, 300],
        answer4: ["", false, 300],
    },
    {
        question: "",
        answer1: ["", false, 400],
        answer2: ["", false, 400],
        answer3: ["", false, 400],
        answer4: ["", false, 400],
    },
    {
        question: "",
        answer1: ["", false, 500],
        answer2: ["", false, 500],
        answer3: ["", false, 500],
        answer4: ["", false, 500],
    },
    // Category 5
    {
        question: "",
        answer1: ["", false, 100],
        answer2: ["", false, 100],
        answer3: ["", false, 100],
        answer4: ["", false, 100],
    },
    {
        question: "",
        answer1: ["", false, 200],
        answer2: ["", false, 200],
        answer3: ["", false, 200],
        answer4: ["", false, 200],
    },
    {
        question: "",
        answer1: ["", false, 300],
        answer2: ["", false, 300],
        answer3: ["", false, 300],
        answer4: ["", false, 300],
    },
    {
        question: "",
        answer1: ["", false, 400],
        answer2: ["", false, 400],
        answer3: ["", false, 400],
        answer4: ["", false, 400],
    },
    {
        question: "",
        answer1: ["", false, 500],
        answer2: ["", false, 500],
        answer3: ["", false, 500],
        answer4: ["", false, 500],
    }
]