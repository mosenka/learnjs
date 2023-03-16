let date1 = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() - days);

    return newDate.getDate();
}

console.log( getDateAgo(date1, 1) );