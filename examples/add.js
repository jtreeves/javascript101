const body = document.querySelector('body')

const newParagraph = document.createElement('p')
newParagraph.innerText = 'Here is a new paragraph!'
newParagraph.classList.add('ugly')
body.appendChild(newParagraph)