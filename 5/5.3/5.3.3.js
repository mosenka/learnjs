let str1 = 'assddffgf aaasddfc';

console.log(truncate(str1, 4));
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '...' : str;
}