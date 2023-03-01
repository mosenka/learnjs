
let calculator = {
    num1: 0,
    num2: 0,
    read() {
        this.num1 = prompt('введите первое значение', '0');
        this.num2 = prompt('введите второе значение', '0');
    },
    sum() {
       return Number(this.num1) + Number(this.num2)
    },
    mul() {
        return Number(this.num1) * Number(this.num2)
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );