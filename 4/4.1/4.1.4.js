let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let emptyObj = {};

console.log(getSumSalaries(salaries));
console.log(getSumSalaries(emptyObj));

function getSumSalaries(obj) {
    let sum = 0;

    for (const key in obj) {
        sum += obj[key];
    }

    return sum;
}