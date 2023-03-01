
function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    }

    this.calculate = (str) => {
        let arr = str.split(" ");
        let num1 = + arr[0];
        let num2 = + arr[2];
        let operation = arr[1];

        if(isNaN(num1) || isNaN(num2) || !this.methods[operation]) {
            return false;
        }
        return this.methods[operation](num1, num2);
    }

    this.addMethod = (name, func) => {
        this.methods[name] = func;
    }

}


let calc = new Calculator;

console.log(calc.calculate("fff - 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);

console.log(powerCalc.calculate("2 * 3"))

