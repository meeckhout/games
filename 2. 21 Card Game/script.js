
// const user = document.querySelector('.user')
const userCard = document.querySelector('.user')
const dealer = document.querySelector('.dealer')
const play = document.getElementById('play')
const hit = document.getElementById('hit')
const stay = document.getElementById('stay')

let hitMe = true
let card
let cardNumber
let drawCard
let sum
let total = 0



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
    // sum = cardNumber + drawCard
    cardNumber = Math.floor(Math.random() * 13) + 1;
    drawCard = cardNumber;

    if (drawCard != 21) {
        hitMe = confirm(`You have ${drawCard}. Add more?`)
    }
        while (total != 21) {
            
    }
}

