const myNouns = ['apple', 'desk', 'rabbit']
const myVerbs = ['jumps', 'runs', 'sleeps']
const myAdjectives = ['ugly', 'green', 'tall']
const myPrepositions = ['over', 'under', 'onto']
const myOtherNouns = ['potato', 'stool', 'dog']
const myOtherAdjectives = ['beautiful', 'stormy', 'golden']

function createSentences(nouns, verbs, adjectives, prepositions, otherNouns, otherAdjectives) {
    for (let i = 0; i < 3; i++) {
        console.log(`The ${adjectives[i]} ${nouns[i]} ${verbs[i]} ${prepositions[i]} the ${otherAdjectives[i]} ${otherNouns[i]}.`)
    }
}

createSentences(myNouns, myVerbs, myAdjectives, myPrepositions, myOtherNouns, myOtherAdjectives)

const myShoppingCart = {
    book: 17.82,
    movie: 9.63,
    shirt: 46.18
}

function calculateTotalPrice(cart) {
    let totalPrice = 0
    
    for (const item in cart) {
        totalPrice += cart[item]
    }

    return totalPrice
}

function determineAffordability(cost, availableMoney, descriptionOfAccount) {
    if (cost <= availableMoney) {
        console.log(`You can afford this with your ${descriptionOfAccount} account.`)
    } else {
        console.log(`You cannot afford this with your ${descriptionOfAccount} account..`)
    }
}

const myTotalPrice = calculateTotalPrice(myShoppingCart)
const myDebitAccount = 100
const myCreditAccount = 50
determineAffordability(myTotalPrice, myDebitAccount, 'debit')
determineAffordability(myTotalPrice, myCreditAccount, 'credit')