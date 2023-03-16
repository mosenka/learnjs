
alert(readNumber());

function readNumber() {
    let num = +prompt('Введите число','0');

    if(isFinite(num)) {
        if (num === null || num === '') return null;

        return +num;
    } else {
        readNumber()
    }
}
