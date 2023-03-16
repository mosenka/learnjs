function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // "Rabbit"
Rabbit.prototype.sayHi(); // undefined так как не задано св-во
Object.getPrototypeOf(rabbit).sayHi(); // undefined, аналогично коду выше
rabbit.__proto__.sayHi(); // undefined, аналогично коду выше