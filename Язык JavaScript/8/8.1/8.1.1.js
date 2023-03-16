'use strict'

let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log( rabbit.jumps ); //  (1)

delete rabbit.jumps;

console.log( rabbit.jumps ); // (2)

delete animal.jumps;

console.log( rabbit.jumps ); //  (3)

// Ответ
// 1.  true
// 2. null
// 3. undefined