

function formatDate(date) {
    let now = new Date();
    let interval = (now - date) / 1000;



    if(interval < 1) {
        return "прямо сейчас";
    } else if( interval < 60 ) {
        return `${interval} сек. назад`
    } else if( interval < 60 * 60 ) {
        return `${interval / 60} мин. назад`
    } else {
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} г., ${date.getHours()}:${date.getMinutes()}`
    }

}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );