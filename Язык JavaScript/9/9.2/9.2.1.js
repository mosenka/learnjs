class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {

    constructor(name) {
        super()
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик");

console.log(rabbit.name)

// Ответ, не вызван super() при наследовании