

function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let result = (now - today) / 1000

    return Math.round(result);
}

console.log(getSecondsToday());