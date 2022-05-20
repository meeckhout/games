
const userCard = document.querySelector('.user-left')
const dealer = document.querySelector('.dealer')
const play = document.getElementById('play')
const hit = document.getElementById('hit')
const stay = document.getElementById('stay')

let hitMe = true
let card
let cardNumber
let drawCard
let total = cardNumber

// TODO: Ask user if they want a card
play.addEventListener('click', (event) => {
    console.log(getRandomNumber());
    console.log(dealCards());
    // console.log(countCards());
})

//TODO: Add a function that draws a random number between 1 and 13
function getRandomNumber() {
    cardNumber = Math.floor(Math.random() * 11 + 1)
    return cardNumber
}

function dealCards() {
    total += Math.floor(Math.random() * 10 + 1)
    document.getElementById('user-left').value.innerText = total
}


    // if (drawCard != 21) {
    //     hitMe = confirm(`You have ${drawCard}. Add more?`)
    //     // userCard.innerHTML = drawCard
    // }


// function countCards() {
//     for (let i = 0; i < 3; i++) {
//         getRandomNumber();
//         total += card
//     } 
// }