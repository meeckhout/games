
const userCard = document.querySelector('.user-left')
let boomVisible = document.querySelector('.user-right')
const dealer = document.querySelector('.dealer')
const play = document.getElementById('play')
const hit = document.getElementById('hit')
const stay = document.getElementById('stay')

let hitMe = true
let card
let cardNumber
let drawCard = 0
let total = cardNumber + drawCard

// TODO: Ask user if they want a card
play.addEventListener('click', (event) => {
    console.log(getRandomNumber());
    console.log(dealCards());

    // console.log(countCards());
})

hit.addEventListener('click', (event) => {
    console.log(dealerCards());
})

//TODO: Add a function that draws a random number between 1 and 13
function getRandomNumber() {
    cardNumber = Math.floor(Math.random() * 11 + 1)
    return cardNumber
}

function dealCards() {
    drawCard = Math.floor(Math.random() * 10 + 1)
    document.getElementById('user-left').innerText = total
    document.getElementById('user-right').innerText = drawCard
}

function dealerCards() {
    drawCard = Math.floor(Math.random() * 10 + 1)
    document.getElementById('dealer-left').innerText = drawCard 
    document.getElementById('dealer-right').innerText = drawCard
}