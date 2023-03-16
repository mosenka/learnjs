// вариант 1
function sumToFor(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumToFor(4))

// вариант 2
function sumTo(n) {
    if( n === 1 ) {
        return 1;
    }
    return n + sumTo(n - 1);
}

console.log(sumTo(3))

function getArithmeticProgression(n) {
    return ((1 + n) / 2) * n;
}

console.log(getArithmeticProgression(3))


// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// ответ через сумма арефмитической прогрессии, так как вызывает функцию всего один раз

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

// ответ нет, так как в js стоит ограничение на вызов внутреней функции не более 10 000 раз