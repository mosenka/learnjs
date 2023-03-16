function Rabbit() {}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {};
// Rabbit.prototype.eats = false;
// delete rabbit.eats;

delete Rabbit.prototype.eats;

console.log( rabbit.eats );

// 1. true, так как объект не был создан,

// 2. false, так как создается по ссылке

// 3. true, delete применяется к свойствам конкретного объекта,

// 4. undefined, так как удалено из прототипа