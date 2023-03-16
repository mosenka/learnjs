function unique(arr) {
    let result = [];

    for (const elem of arr) {
        if(!result.includes(elem)) {
            result.push(elem)
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];


console.log(unique(strings));