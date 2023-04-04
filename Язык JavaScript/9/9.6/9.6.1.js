function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true


/*
* Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
*  так функции имеют один и тот же прототип, соотевтственно одного и того же родителя, поэтому равны
*
* */