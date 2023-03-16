function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

// Ответ: Да, они независимы, так как каждая функция имеет свое лексическое окружение и может изменять только его, в данном случае это переменная count, созданая для каждого экземпляра своя, поэтому покажет сначала 0 потом 1