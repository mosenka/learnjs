let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
        if(!(item >= a && item <= b) ) {
            arr.splice(index, 1)
        }
    })

    return arr;
}

filterRangeInPlace(arr, 1, 4);

console.log(arr);