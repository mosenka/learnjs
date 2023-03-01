console.log(getRandomInteger(1,888))


function getRandomInteger(min, max) {
    return Math.floor( Math.random() * (max - min + 1)) + min;
}