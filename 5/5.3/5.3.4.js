console.log(extractCurrencyValue('$958'))

function extractCurrencyValue(str) {
    return +str.slice(1);
}