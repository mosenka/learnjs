

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let interval = tomorrow - now;

    return Math.round(interval / 1000);

}

console.log(getSecondsToTomorrow())