const heading = document.querySelector('h1')
const cells = document.querySelectorAll('.cell')

function changeColor() {
    if (this.style.background === '' || this.style.background === 'orange') {
        this.style.background = 'green'
    } else if (this.style.background === 'green') {
        this.style.background = 'purple'
    } else {
        this.style.background = 'orange'
    }
}

function changeTitle() {
    heading.innerText = 'Nope! Click the Squares!'
}

for (const cell of cells) {
    cell.onclick = changeColor
}

heading.onclick = changeTitle