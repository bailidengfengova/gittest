"use strict";
function hello() {
    console.log('hello world');
}
hello();
let num = 0b10101010;
console.log(num);
var abc = '123';
abc = {};
var str = '1234';
var something;
something = 1;
something = '123';
let car = {
    name: 'ford',
    color: 'aqua',
    isEmpty: true,
    isV8: 0,
    isImport: false
};
//定义数组
// let arr1:number[] = [1,2,3,'4',5];
let arr2 = [1, 2, 3, 44];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5
};
//函数
let fun = (x, y) => (x + y);
console.log(fun(1, 2));
// var animal:Cat|Fish = {
//     name:'cat',
//     eat():void
// };
function isFish(animal) {
    if (!animal.swim) {
        console.log('catcatcat');
        return false;
    }
    else {
        console.log('fishfishfish');
        return true;
    }
}
let cat = {
    name: 'nikoo',
    eat() {
        console.log('eat');
        return '执行函数';
    }
};
console.log('------');
//调用的是函数
console.log(cat.eat);
console.log(cat.eat());
console.log('++++++');
console.log('cat', isFish(cat));
let xStr1 = '123';
let xStr2 = 123;
let xStr3 = 'click';
//枚举类型
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["thu"] = 2] = "thu";
    Days[Days["wee"] = 3] = "wee";
    Days[Days["tru"] = 4] = "tru";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
})(Days || (Days = {}));
console.log(Days.sun);
console.log(Days['sun']);
console.log(Days[0]);
var Cars;
(function (Cars) {
    Cars[Cars["ford"] = 0] = "ford";
    Cars[Cars["audi"] = 1] = "audi";
    Cars[Cars["baoma"] = 2] = "baoma";
    Cars[Cars["benchi"] = 3] = "benchi";
    Cars[Cars["dazhong"] = 4] = "dazhong";
})(Cars || (Cars = {}));
console.log(Cars['ford']); //0
console.log(Cars[0]); //ford
console.log(Cars.ford); //0
const day = Cars.audi;
console.log(day);
let days = [Cars.audi, Cars.baoma, Cars.dazhong];
console.log('days', days);
//类
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return this.name;
    }
}
let a = new Animal('Jack');
// console.log(a.name);
// a.name = 'Tom';
console.log(a.sayHello());
//参数属性
class Animal1 {
    constructor(name) {
        this.name = name;
    }
}
let ani = new Animal1('Jack');
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
let ani2 = new Animal2('Jack2');
console.log(ani2.name);
// ani2.name = 'Tom'
//抽象类
class Animal10 {
    constructor(name) {
        this.name = name;
    }
    ;
}
class Cat10 extends Animal10 {
    constructor(name) {
        super(name);
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
        return null;
    }
}
let cat10 = new Cat10('cjy');
console.log(cat10.sayHi());
let cat11 = new Cat10('');
class Door {
}
class securityDoor extends Door {
    alert() {
        console.log('响铃');
    }
    open() {
        console.log('开门');
    }
}
let sd1 = new securityDoor();
console.log(sd1.alert());
console.log(sd1.open());
//泛型
function createArray(length, value, value2) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
let createFn = {
    createFn(length, value) {
        let result = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
};
//类的泛型
class GenericNumber {
    constructor(zeroValue) {
        this.zeroValue = zeroValue;
    }
    add(x, y) {
        console.log(x, y);
        return 0;
    }
}
let generic = new GenericNumber(0);
generic.zeroValue = 100;
console.log(generic.zeroValue);
console.log(generic.add(10, 20));
