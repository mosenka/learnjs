let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head

};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table

};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen);
console.log(bed.glasses)

// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// 1. pockets.glasses цепочка поиска
// pockets → bed → table → head

// 2. head.glasses сразу находит в объекте head

//  Ответ pockets.glasses = head.glasses на скорось не влияет