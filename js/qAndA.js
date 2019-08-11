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
        question: "Louisiana",
        answer1: ["New Orleans", false, 100],
        answer2: ["Hammond", false, 100],
        answer3: ["Baton Rouge", true, 100],
        answer4: ["Metairie", false, 100],
    },
    {
        question: "Massachusetts",
        answer1: ["Boston", true, 200],
        answer2: ["Cambridge", false, 200],
        answer3: ["Burlington", false, 200],
        answer4: ["", false, 200],
    },
    {
        question: "Texas",
        answer1: ["Fort Worth", false, 300],
        answer2: ["Dallas", false, 300],
        answer3: ["Houston", true, 300],
        answer4: ["Arlington", false, 300],
    },
    {
        question: "Maryland",
        answer1: ["Towson", false, 400],
        answer2: ["Columbia", false, 400],
        answer3: ["Baltimore", false, 400],
        answer4: ["Annapolis", true, 400],
    },
    {
        question: "California",
        answer1: ["Long Beach", false, 500],
        answer2: ["Sacramento", true, 500],
        answer3: ["Los Angeles", false, 500],
        answer4: ["Anaheim", false, 500],
    },
    // Category 4
    {
        question: "Rihanna",
        answer1: ["Fenty", true, 100],
        answer2: ["Knowles", false, 100],
        answer3: ["Carter", false, 100],
        answer4: ["Taylor", false, 100],
    },
    {
        question: "Usher",
        answer1: ["Jones", false, 200],
        answer2: ["Robins", false, 200],
        answer3: ["Raymond", true, 200],
        answer4: ["Smith", false, 200],
    },
    {
        question: "Cher",
        answer1: ["Ciccone", false, 300],
        answer2: ["Sarkisian", true, 300],
        answer3: ["Turner", false, 300],
        answer4: ["Bono", true, 300],
    },
    {
        question: "Will.I.Am",
        answer1: ["Johnson", false, 400],
        answer2: ["Greene", false, 400],
        answer3: ["Adams", true, 400],
        answer4: ["Jones", false, 400],
    },
    {
        question: "Adele",
        answer1: ["Adkins", true, 500],
        answer2: ["Eagleston", false, 500],
        answer3: ["Davies", false, 500],
        answer4: ["Hughes", false, 500],
    },
    // Category 5
    {
        question: "amor",
        answer1: ["French", false, 100],
        answer2: ["Spanish", true, 100],
        answer3: ["Romanian", false, 100],
        answer4: ["Portuguese", false, 100],
    },
    {
        question: "amore",
        answer1: ["Italian", true, 200],
        answer2: ["Spanish", false, 200],
        answer3: ["Tibetan", false, 200],
        answer4: ["French", false, 200],
    },
    {
        question: "liebe",
        answer1: ["Hebrew", false, 300],
        answer2: ["Punjabi", false, 300],
        answer3: ["Bengali", false, 300],
        answer4: ["German", true, 300],
    },
    {
        question: "amour",
        answer1: ["Spanish", false, 400],
        answer2: ["French", true, 400],
        answer3: ["Romanian", false, 400],
        answer4: ["Aramaic", false, 400],
    },
    {
        question: "lyublyu",
        answer1: ["Persian", false, 500],
        answer2: ["Hindustani", false, 500],
        answer3: ["Russian", true, 500],
        answer4: ["Arabic", false, 500],
    }
]