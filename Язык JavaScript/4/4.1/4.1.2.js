let obj1 = {
    name: '123'
}

let obj2 = {};

console.log(isEmpty(obj1));

function isEmpty(obj) {
    for (const key in obj) {
        if(obj[key]) return false;
    }

    return true;
}