function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

let ask = askPassword(user.loginOk.bind(user), user.loginFail.bind(user))


// Однако, его вызов приводит к ошибке. Почему?

// ответ так как функции в объекте ссылаютя на его же контектс, вызов вне его приводит к ошибке

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).