let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let uniqueArr = new Set();

    for (const item of arr) {
        uniqueArr.add(item)
    }

    return Array.from(uniqueArr);
}

console.log(unique(values))