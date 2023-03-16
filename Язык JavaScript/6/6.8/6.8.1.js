
// вариант 1
function printNumbers1(from, to) {
    let i = from;

    let timerId = setInterval(function () {
        console.log(i);
        if( i === to) {
            clearInterval(timerId);
        } else {
            i++;
        }
    }, 1000)
}

// printNumbers1(2, 8)

// вариант 2
function printNumbers2(from, to) {
    let i = from;

    let timerId2 = setTimeout(function start() {
        console.log(i);
        if( i < to) {
            setTimeout(start, 1000)
        }
        i++;
    }, 1000)
}

printNumbers2(6, 18)
