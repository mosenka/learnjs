let date = new Date(2012, 0, 3);

function getWeekDay(date) {
    let weekNames = ["ВС","ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    return weekNames[date.getDay()]

}

console.log(getWeekDay(date));