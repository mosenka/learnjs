let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// рекурсия
function printReversList1(list) {
    if(list.next) {
        printReversList1(list.next)
    }
    console.log(list.value);
}

// printReversList1(list)

// цикл
function printReversList2(list) {
    let subList = list;
    let arr = [];

    while(subList) {
       arr.push(subList.value);
        subList = subList.next;
    }

    arr.reverse();

    arr.forEach(elem => console.log(elem))
}

printReversList2(list);