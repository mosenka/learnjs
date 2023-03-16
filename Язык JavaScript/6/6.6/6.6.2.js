
function sum(num) {

    let result = num;

    function f(num2) {
        result += num2;
        return f;
    }

    f.toString = function() {
        return result;
    };

    return f;
}

console.log(sum(1)(5))