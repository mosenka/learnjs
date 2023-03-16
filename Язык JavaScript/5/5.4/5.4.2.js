let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");


function getMiddleArr(arr) {
    return Math.floor(arr.length / 2);
}

styles[getMiddleArr(styles)] = "Классика";

console.log(styles.shift())

styles.unshift('Рэп', 'Регги' );

console.log(styles);