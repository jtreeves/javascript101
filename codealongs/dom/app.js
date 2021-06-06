const body = document.querySelector('body')

const paragraph = document.querySelector('p')

const buttons = document.querySelectorAll('button')
const firstButton = buttons[0]
const secondButton = buttons[1]
const thirdButton = buttons[2]

function clickFirstButton() {
    firstButton.innerText = 'You clicked the first button!'
    firstButton.style.color = 'yellow'
    firstButton.style.background = 'purple'
}

firstButton.onclick = clickFirstButton()

function clickSecondButton() {
    const newButton = document.createElement('button')
    newButton.innerText = 'New Button'
    body.appendChild(newButton)
}

secondButton.onclick = clickSecondButton()

function clickThirdButton() {
    paragraph.remove()
}

thirdButton.onclick = clickThirdButton()