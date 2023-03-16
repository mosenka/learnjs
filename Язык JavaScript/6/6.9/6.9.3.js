function func(x) {
    setTimeout(() => {
        console.log(x)
    }, 100)
}

function debounce(f, ms) {
    let isReady = false;

    return function() {
        if (isReady) return;

        f.apply(this, arguments);

        isReady = true;

        setTimeout(() => isReady = false, ms);
    };
}

let f = debounce(func, 1000);

f(1);
f(2);

