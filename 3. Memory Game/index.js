const section = document.querySelector('section')
const playerLivesCount = document.querySelector('.playerLivesCount')
const playerLives = 6

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
  cardData.forEach(item => {
    console.log(item)
  })

  const card = document.createElement('div')
  const face = document.createElement('img')
  const back = document.createElement('div')
  card.classList = 'card'
  face.classList = 'face'
  back.classList = 'back'

}

cardGenerator()