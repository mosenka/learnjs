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

// вариант 1 c рекурсией
function printList1(list) {
    console.log(list.value)

    if(list.next) {
        printList1(list.next)
    }
}

printList1(list)

// вариант 2 с циклом
function printList2(list) {
    let subList = list;

    while(subList) {
        console.log(subList.value);
        subList = subList.next;
    }
}
printList2(list)

// Как лучше: с рекурсией или без? вариант с рекукрсией более лаконичный