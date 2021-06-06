const button = document.querySelector('button')

function changeButton() {
    button.innerText = 'This button has been clicked!'
    button.style.color = 'yellow'
    button.style.background = 'purple'
}

button.onclick = changeButton()