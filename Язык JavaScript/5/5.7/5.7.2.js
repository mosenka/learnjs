let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let result = new Map();

    for (const str of arr) {
        result.set(str.toLowerCase().split('').sort().join(), str);
    }

    return Array.from(result.values());
}

console.log(aclean(arr))