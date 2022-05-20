
// const user = document.querySelector('.user')
const userCard = document.querySelector('.user')
const dealer = document.querySelector('.dealer')
const pickCard = document.getElementById('pick')

let card
let cardTwo

// TODO: Ask user if they want a card
pickCard.addEventListener('click', (event) => {
    console.log(generateCard());
    console.log(getRandomNumber());
})

function generateCard() {
    card = Math.floor(Math.random() * 52 + 1) +1

    console.log(card);
}

//TODO: Add a function that draws a random number between 1 and 13
function getRandomNumber() {
    cardTwo = Math.floor(Math.random() *  (13 - 1 + 1) + 1)
    console.log(cardTwo);
}

//TODO: Add a function that counts the card on the table
