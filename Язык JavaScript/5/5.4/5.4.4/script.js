const sumInput = () => {
    let arr = [];

    while (true) {
        let num = prompt('Число?', 0);

        if (num === '' || num === null || !isFinite(num)) break;

        arr.push(+num);

    }

    alert(getSumArr(arr));
}

const getSumArr = (arr) => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }

    return sum;
}

sumInput();


