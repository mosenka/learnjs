function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат?

// ответ undefined, так как объект не был создан, и this берется из функции, но не из объекта

