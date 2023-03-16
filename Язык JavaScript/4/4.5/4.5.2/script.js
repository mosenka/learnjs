function Calculator() {
    this.num1 = 0;
    this.num2 = 0;
    this.read = () => {
        this.num1 = prompt('введите первое значение', '0');
        this.num2 = prompt('введите второе значение', '0');
    },
        this.sum = () => {
            return Number(this.num1) + Number(this.num2)
        },
        this.mul = () => {
            return Number(this.num1) * Number(this.num2)
        }
}

let calculator = new Calculator();
calculator.read();

alert(calculator.sum());
alert(calculator.mul());

