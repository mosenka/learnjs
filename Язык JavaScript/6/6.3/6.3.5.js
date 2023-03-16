function inBetween(a, b) {
    return (item) =>  item >= a && item <= b;
}

function inArray([...arg]) {
    return (item) => arg.includes(item)
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) );
console.log( arr.filter(inArray([1, 2,10])) );


