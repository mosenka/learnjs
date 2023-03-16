function pow(x, n) {
    let num = x;
    for (let i = 1; i < num; i++) {
        num *= x;
    }
    return num;
}
let num1  = prompt('Введите число:', '');
let num2 = prompt('Введите степень:', '');

if(num2 < 0) {
    alert('не то');
} else {
    alert(pow(num1, num2));
}
