Function.prototype.defer = function (ms) {
    let func = this;
    return function (...arg) {
        setTimeout(() => func.apply(this, arg), ms)
    }
}

function f(a, b) {
    console.log( a + b );
}

f.defer(1000)(1, 2)