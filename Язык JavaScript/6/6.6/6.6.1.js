function makeCounter() {

    function counter() {
        return counter.count++;
    };



    counter.count = 0;

    counter.set = (value) => {
        counter.count = value;
    }

    counter.decrease = () => {
        counter.count = --counter.count;
    }

    return counter;
}

let counter = makeCounter();


counter.count = 10;
counter.set(12);
counter.decrease();
counter.decrease();

console.log( counter() );