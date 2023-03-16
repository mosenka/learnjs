// Возможно ли создать функции A и B, чтобы new A() == new B()?

// да, возможно если они будут возвращать ссылку на один и тот же объект

let obj = {}

function A() {
    return obj;
}
function B() {
    return obj;
}

console.log(new A() == new B());