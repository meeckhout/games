const section = document.querySelector('section')
const playerLivesCount = document.querySelector('.playerLivesCount')
let playerLives = 6

// Link text
playerLivesCount.textContent = playerLives

//Generate the data
const getData = () => [
    {imgSrc: './images/otter.1.jpg', name: 'otter 1'},
    {imgSrc: './images/otter.2.jpg', name: 'otter 2'},
    {imgSrc: './images/otter.3.png', name: 'otter 3'},
    {imgSrc: './images/otter.4.jpg', name: 'otter 4'},
    {imgSrc: './images/otter.5.jpg', name: 'otter 5'},
    {imgSrc: './images/otter.6.jpeg', name: 'otter 6'},
    {imgSrc: './images/otter.7.jpg', name: 'otter 7'},
    {imgSrc: './images/otter.8.jpg', name: 'otter 8'},
    {imgSrc: './images/otter.1.jpg', name: 'otter 1'},
    {imgSrc: './images/otter.2.jpg', name: 'otter 2'},
    {imgSrc: './images/otter.3.png', name: 'otter 3'},
    {imgSrc: './images/otter.4.jpg', name: 'otter 4'},
    {imgSrc: './images/otter.5.jpg', name: 'otter 5'},
    {imgSrc: './images/otter.6.jpeg', name: 'otter 6'},
    {imgSrc: './images/otter.7.jpg', name: 'otter 7'},
    {imgSrc: './images/otter.8.jpg', name: 'otter 8'},
]

//Randomise
const randomise = () => {
  const cardData = getData()
    cardData.sort(() => Math.random() - 0.5)
  return cardData
}

//Card generator function
const cardGenerator = () => {
  const cardData = randomise();
  //Generate HTML
  cardData.forEach((item) => {
    const card = document.createElement('div')
    const face = document.createElement('img')
    const back = document.createElement('div')
    card.classList = 'card'
    face.classList = 'face'
    back.classList = 'back'
    //Attach img to cards
    face.src = item.imgSrc
    card.setAttribute('name', item.name)
    //Attach card to section
    section.appendChild(card)
    card.appendChild(face)
    card.appendChild(back)

    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard')
      checkCards(e)
    })
  })
}

//Check cards
const checkCards = (e) => {
  const clickedCard = e.target
  clickedCard.classList.add('flipped')
  const flippedCards = document.querySelectorAll('.flipped')
  const toggleCard = document.querySelectorAll('.toggleCard')
  //Logic
  if (flippedCards.length === 2){
    if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove('flipped')
        card.style.pointerEvents = 'none'
      })
    } else {
    flippedCards.forEach((card) => {
      card.classList.remove('flipped')
      setTimeout(() => card.classList.remove('toggleCard'), 1000)
    })
      playerLives--
      playerLivesCount.textContent = playerLives
      if (playerLives === 0) {
        restart("Otterly disappointing, you otter try again!")
      }
  }}
  //Run check to see if you won
  if (toggleCard.length === 16){
    restart("Otterwordly performance! You rock!")
  }
}

//Restart
const restart = (text) => {
  let cardData = randomise()
  let faces = document.querySelectorAll('.face')
  let cards = document.querySelectorAll('.card')
  section.style.pointerEvents = 'none'
  cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard')
    //Randomise
    setTimeout(() => {
      cards[index].style.pointerEvents = 'all'
      faces[index].src = item.imgSrc
      cards[index].setAttribute('name', item.name)
      section.style.pointerEvents = 'all'
    }, 1000)
  })
  playerLives = 6
  playerLivesCount.textContent = playerLives
  setTimeout(() => window.alert(text), 100)
}

cardGenerator()