let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let result = [];

    arr.forEach(item => {
        if(item >= a && item <= b) {
            result.push(item)
        }
    })

    return result;
}

console.log(filterRange(arr, 4, 4))

