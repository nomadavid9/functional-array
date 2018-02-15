const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

function addUp(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].amount
    }
    return total
}
console.log(addUp(orders))


function addUpFilter(array) {
    const reducer = (accumulator, arrayCell) => accumulator + arrayCell.amount
    return array.reduce(reducer, 0)
}
console.log(addUpFilter(orders))
