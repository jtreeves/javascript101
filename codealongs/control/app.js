function assignLetterGrade(testScore) {
    if (testScore >= 90) {
        return 'A'
    } else if (testScore >= 80) {
        return 'B'
    } else if (testScore >= 70) {
        return 'C'
    } else if (testScore >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

const myTestScore = 74
const yourTestScore = 86

const myLetterGrade = assignLetterGrade(myTestScore)
const yourLetterGrade = assignLetterGrade(yourTestScore)

const sentence = `I got a ${myLetterGrade} on the test. You got a ${yourLetterGrade} on the test.`

console.log(sentence)

function printFoods(foods) {
    for (const food of foods) {
        console.log(food)
    }
}

const myFoods = ['pizza', 'apple', 'ice cream']

printFoods(myFoods)