const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]

let playerHand
let dealerHand

const drawRandomCard = (deck) => {
    const randomIndex = Math.floor(Math.random() * deck.length)
    return deck[randomIndex]
}
// console.log(drawRandomCard(deck))

const startGame = () => {
    playerHand = [drawRandomCard(deck), drawRandomCard(deck)]
    dealerHand = [drawRandomCard(deck), drawRandomCard(deck)]
}

const getHandValue = (hand) => {
    let sum = 0
    for (let i = 0; i <hand.length; i++){
        sum = sum + hand[i]
    }
    return sum
}

const hit = () => {
    playerHand.push(drawRandomCard(deck))
    console.log("hit!")
    console.log('new player hand: ' + playerHand)
    if (getHandValue(playerHand) > 21) {
        document.getElementById('game-status').innerHTML = "BUST!"
    }
}

const stay = () => {
    playerHand.push(drawRandomCard(deck))
    console.log("hit!")
    console.log('new player hand: ' + playerHand)
    if (getHandValue(playerHand) > 21) {
        console.log("BUST!")
    }
}

startGame()

document.getElementById('player-hand').innerHTML = playerHand
document.getElementById('player-hand-value').innerHTML = getHandValue(playerHand)
document.getElementById('dealer-hand').innerHTML = dealerHand
document.getElementById('dealer-hand-value').innerHTML = getHandValue(dealerHand)