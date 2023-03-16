function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log( bound.test ); // что выведет? почему?

// ответ undefined, как как к функции привязали контекст в виде объекта, в котором нет св-ва test