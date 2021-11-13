const container = document.querySelector('#container')
const colors = ['#1C7C54', '#73E2A7', '#DEF4C6', '#1B512D', '#B1CF5F'  ]

const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.background =  `#1d1d1d`
    element.style.boxShadow =  `0 0 2px #000`

}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}