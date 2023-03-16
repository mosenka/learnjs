let age = 25;

// 1ый вариант
if(!(age >= 14 && age <= 90)) {
    console.log('вне диапазона');
} else {
    console.log('в диапазоне')
}

// 2ой вариант
if(age < 14 || age > 90) {
    console.log('вне диапазона');
} else {
    console.log('в диапазоне')
}