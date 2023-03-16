let str = 'my-short-string';
let test = "aaa";


function camelize(str) {
    let result = str.split('-').map(item => setFirstLetter(item))

    return result.join('');
}

function setFirstLetter(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

console.log(camelize(str));
console.log(camelize("-webkit-transition"))
