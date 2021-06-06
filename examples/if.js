if (number >= 100 && number < 1000) {
    console.log('This is a 3-digit number')
} else {
    console.log('This is not a 3-digit number')
}

if (grade < 60) {
    return 'F'
} else if (grade < 70) {
    return 'D'
} else if (grade < 80) {
    return 'C'
} else if (grade < 90) {
    return 'B'
} else {
    return 'A'
}

if (grade >= 90) {
    return 'A'
} else if (grade >= 80) {
    return 'B'
} else if (grade >= 70) {
    return 'C'
} else if (grade >= 60) {
    return 'D'
} else {
    return 'F'
}