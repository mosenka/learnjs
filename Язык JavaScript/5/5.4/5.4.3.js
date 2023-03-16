let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
});

arr[2]();

// ответ выведет [ 'a', 'b', [Function (anonymous)] ], так как массив это разновидность объекта и в качестве this получает ссылку на себя же