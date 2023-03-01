let str = 'aaa viagra';
let str2 = 'aaa bbb';
let str3 = 'buy ViAgRA now';

console.log(checkSpam(str));
console.log(checkSpam(str2));
console.log(checkSpam(str3));


function checkSpam(str) {
    return str.toLowerCase().indexOf('viagra') != -1
        || str.toLowerCase().indexOf('XXX') != -1;
}