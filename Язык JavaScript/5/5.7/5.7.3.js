let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);

// ответ для объекта Map нет метода push, поэтому не работает, нужно перобразовать в массив через метод Array.from(map.keys()), тогда push будет работать