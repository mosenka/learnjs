const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";

console.log(user)

// Ответ да можно, так как константой является сама переменная user, в нее нельзя записать что то новое, а ее содержимое, то есть сам объект изменять можно