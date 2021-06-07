const body = document.querySelector('body')
const buttons = document.querySelectorAll('button')
const firstButton = buttons[0]
const secondButton = buttons[1]
const thirdButton = buttons[2]
const fourthButton = buttons[3]
const fifthButton = buttons[4]
const sixthButton = buttons[5]
const seventhButton = buttons[6]
const eighthButton = buttons[7]
const ninthButton = buttons[8]
const tenthButton = buttons[9]
const eleventhButton = buttons[10]

function makeBlue() {
    body.style.background = 'blue'
}

function makeRed() {
    body.style.background = 'red'
}

function makeWhite() {
    body.style.background = 'white'
}

function addSquare() {
    const newSquare = document.createElement('div')
    newSquare.classList.add('square')
    body.appendChild(newSquare)
}

function addCircle() {
    const newCircle = document.createElement('div')
    newCircle.classList.add('circle')
    body.appendChild(newCircle)
}

function deleteSquare() {
    const squares = document.querySelectorAll('.square')
    if (squares.length != 0) {
        body.removeChild(squares[squares.length - 1])
    }
}

function deleteCircle() {
    const circles = document.querySelectorAll('.circle')
    if (circles.length != 0) {
        body.removeChild(circles[circles.length - 1])
    }
}

function makeSquaresGreen() {
    const squares = document.querySelectorAll('.square')
    if (squares.length != 0) {
        for (const square of squares) {
            square.style.background = 'green'
        }
    }
}

function makeSquaresYellow() {
    const squares = document.querySelectorAll('.square')
    if (squares.length != 0) {
        for (const square of squares) {
            square.style.background = 'yellow'
        }
    }
}

function makeCirclesPurple() {
    const circles = document.querySelectorAll('.circle')
    if (circles.length != 0) {
        for (const circle of circles) {
            circle.style.background = 'purple'
        }
    }
}

function makeCirclesOrange() {
    const circles = document.querySelectorAll('.circle')
    if (circles.length != 0) {
        for (const circle of circles) {
            circle.style.background = 'orange'
        }
    }
}

firstButton.onclick = makeBlue
secondButton.onclick = makeRed
thirdButton.onclick = makeWhite
fourthButton.onclick = addSquare
fifthButton.onclick = addCircle
sixthButton.onclick = deleteSquare
seventhButton.onclick = deleteCircle
eighthButton.onclick = makeSquaresGreen
ninthButton.onclick = makeSquaresYellow
tenthButton.onclick = makeCirclesPurple
eleventhButton.onclick = makeCirclesOrange