// function calculateMoney(ticketSale) {
//     if (ticketSale < 0) {
//         return 'Invalid Number'
//     }
//     const ticketPrice = 120;
//     const gardBill = 500;
//     const stuffLunch = 50;
//     const totalTicketSell = ticketSale * ticketPrice;
//     const remainingMoney = totalTicketSell - (gardBill + stuffLunch * 8);
//     return remainingMoney;
// }


// function checkName(nam) {
//     if (typeof nam !== 'string'){
//         return 'invalid'
//     }
//     const lastIndex = nam.length - 1;
//     const lastChar = nam[lastIndex].toLocaleLowerCase();
//     if (lastChar === 'a'  || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
//         return 'Good Name'
//     }
//     else {
//         return 'Bad Name'
//     }
// }


// const array = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array'
    }
    let newArray = []
    for (const item of array) {
        if (typeof item == "number" && !isNaN(item)) {
            newArray.push(item)
        }
    }
    return newArray
}

// const newArray = deleteInvalids(array)
// console.log(newArray);



//  const obj = { name: 'maisha' , birthYear: 2002 }

function password(obj) {
    if (!('name' in obj)) return 'invalid'
    if (!('birthYear' in obj)) return 'invalid'
    if (!('siteName' in obj)) return 'invalid'
    if (obj.birthYear < 1000) return 'invalid'
    return obj.siteName + '#' + obj.name + '@' + obj.birthYear
}
//  const thePass = password(obj)
//  console.log(thePass);


const income = 10000
const livingCost = [900, 2700, 3400]
function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr)) return 'invalid input'
    if (!(typeof livingCost === 'number')) return 'invalid input'
    let totalIncome = 0
    for (let inc of arr) {
        if (inc >= 3000){
            inc = inc * .8
        }
        totalIncome += inc;
    }
    if (totalIncome < livingCost) {
        return 'earn more'
    }
    const totalSaving = totalIncome - livingCost
    return totalSaving
}

const res = monthlySavings(income, livingCost)
console.log(res);