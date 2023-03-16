'use strict'

function f() {
    console.log( this ); // ?
}

let user = {
    g: f.bind(null)
};

user.g();

// Что выведет функция?
// null (при 'use strict') и без