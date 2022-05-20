
// const user = document.querySelector('.user')
const userCard = document.querySelector('.user')
const dealer = document.querySelector('.dealer')
const pickCard = document.getElementById('pick')

// let deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
let card


// TODO: Ask user if they want a card
pickCard.addEventListener('click', (event) => {
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
    const cardNumber = Math.floor(Math.random() * 13) + 1;
    let drawCard = cardNumber;
    if (drawCard != 21) {
        alert(`You have ${drawCard}. Add more?`);
    } console.log(cardNumber);
}



// deck.forEach(function(str) {
//     console.log(str);
// })

//TODO: Add a function that counts the card on the table
// function countCards() {
//     if (card != 21) {
//         alert(`You have got ${card}, add more?`)
//     }
// }