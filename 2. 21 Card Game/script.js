
// const user = document.querySelector('.user')
const userCard = document.querySelector('.user')
const dealer = document.querySelector('.dealer')
const play = document.getElementById('play')
const hit = document.getElementById('hit')
const stay = document.getElementById('stay')
// let deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
let card
let cardNumber
let drawCard


// TODO: Ask user if they want a card
play.addEventListener('click', (event) => {
    // console.log(generateCard());
    console.log(getRandomNumber());
    // console.log(countCards());
})

// function generateCard() {
//     card = Math.floor(Math.random() * 52 + 1) +1
    

//     console.log(card);
// }

//TODO: Add a function that draws a random number between 1 and 13
function getRandomNumber() {
    cardNumber = Math.floor(Math.random() * 13) + 1;
    drawCard = cardNumber;
    if (drawCard != 21) {
        alert(`You have ${drawCard}. Add more?`)
        hit.addEventListener('click', event => {
            countCards()
        })
    } console.log(cardNumber);
}

function countCards() {
    if (drawCard != 21) {
        alert(`You have ${drawCard}. Add more?`)
    } console.log(drawCard);
}