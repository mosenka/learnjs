function Rabbit(name) {
    this.name = name;

}

// let obj2 = new obj.constructor();

let reddit = new Rabbit('Don');
let reddit2 = new reddit.constructor('Joly');

console.log(reddit2.name)