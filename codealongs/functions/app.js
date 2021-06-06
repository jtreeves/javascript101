function introduction(firstName, lastName) {
    console.log(`Hi! My name is ${firstName} ${lastName}.`)
}

introduction('Jackson', 'Reeves')

function splitBill(billAmount, numberOfPeople) {
    const individualAmount = billAmount / numberOfPeople
    const roundedAmount = individualAmount.toFixed(2)
    console.log(`Each person should pay $${roundedAmount}.`)
}

splitBill(57.68, 7)