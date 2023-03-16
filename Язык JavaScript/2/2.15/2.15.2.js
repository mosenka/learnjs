/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
*/
// 1.
function checkAge(age) {
    return (age < 18) ? confirm('Родители разрешили?') : true;
}

// 2.
function checkAge(age) {
    return (age < 18) || confirm('Родители разрешили?');
}

checkAge(188)
