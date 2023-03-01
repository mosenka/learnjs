let login = prompt('Ваш логин?', '');
let password;

if(login === 'Админ') {
    password = prompt('Ваш пароль?','')
    if(password === 'Я главный') {
        alert('Здравствуйте!')
    } else if(!password) {
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }
} else if(!login) {
    alert('Отменено')
} else {
    alert('Я вас не знаю')
}