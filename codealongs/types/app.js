const firstName = 'Jackson'
const currentAge = 34
const happiness = true
const jobs = ['programmer', 'teacher', 'writer']
const favoriteThings = {
    food: 'pizza',
    movie: 'Star Wars',
    book: 'A Visit from the Goon Squad',
    show: 'Archer'
}

const me = {
    name: firstName,
    age: currentAge,
    happy: happiness,
    work: jobs,
    favorites: favoriteThings
}

const sentence = `Hi! My name is ${me.name}. I am ${me.age} years old. I am a ${me.work[0]}, a ${me.work[1]}, and a ${me.work[2]}. My favorite food is ${me.favorites.food}.`

console.log(sentence)