function hello() {
    console.log('hello world');
}
hello();

let num:number = 0b10101010
console.log(num);


var abc:any = '123';
abc = {}
var str:string = '1234';
var something;
something = 1;
something = '123'
// console.log(abc.aa.aa);

//接口
interface Car{
    name:string;
    color:string;
    isEmpty:boolean;
    isV8?:boolean|number;
    [diyName:string]:any
}

let car:Car = {
    name:'ford',
    color:'aqua',
    isEmpty:true,
    isV8:0,
    isImport:false
}


//定义数组
// let arr1:number[] = [1,2,3,'4',5];
let arr2:Array<number> = [1,2,3,44]


interface NumberArray {
    [index:number]:number
}

let arr3:NumberArray = [1,2,3,4,5];

let arr4:NumberArray = {
    1:1,
    2:2,
    3:3,
    4:4,
    5:5
}

//函数
let fun = (x:number,y:number):number => (x+y);
console.log(fun(1,2));

//断言
interface Cat{
    name:string;
    eat():void
}
interface Fish{
    name:string;
    swim():void
}

// var animal:Cat|Fish = {
//     name:'cat',
//     eat():void
// };

function isFish(animal:Cat|Fish) {
    if(!(animal as Fish).swim){
        console.log('catcatcat');
        return false
    }else{
        console.log('fishfishfish');
        return true
    }
}

let cat:Cat ={
    name:'nikoo',
    eat(){console.log('eat');
    return '执行函数'
    }
}
console.log('------');

//调用的是函数
console.log(cat.eat);

console.log(cat.eat());


console.log('++++++');



console.log('cat',isFish(cat));




//类型别名
type xuanStr = string

let xStr1:xuanStr = '123';
type xuanStrNum = string|number;
let xStr2:xuanStrNum = 123
type xuanStrs = 'click'|'sroll'|'onsroll'
let xStr3:xuanStrs = 'click'

//枚举类型
enum Days {sun,mon,thu,wee,tru,fri,sat}
console.log(Days.sun);
console.log(Days['sun']);
console.log(Days[0]);

enum Cars {ford,audi,baoma,benchi,dazhong}
console.log(Cars['ford']);  //0
console.log(Cars[0]);   //ford
console.log(Cars.ford); //0

const day:Cars = Cars.audi;
console.log(day);

let days:Cars[] = [Cars.audi,Cars.baoma,Cars.dazhong];
console.log('days',days);


//类
class Animal{
    private name;
    public constructor(name:string){
        this.name = name;
    }
    public sayHello(){
        return this.name;
    }
}

let a = new Animal('Jack');
// console.log(a.name);
// a.name = 'Tom';
console.log(a.sayHello());


//参数属性
class Animal1 {
    public name:string;
    public constructor(name:string){
        this.name = name
    }
}
let ani = new Animal1('Jack');

class Animal2 {
    public constructor(public readonly name:string){
        
    }
}

let ani2 = new Animal2('Jack2')
console.log(ani2.name);
// ani2.name = 'Tom'

//抽象类
abstract class Animal10{
    public constructor(public name:string){};
    public abstract sayHi():void
}

class Cat10 extends Animal10{
    constructor(public name:string){
        super(name);
    }
    public sayHi(){
        console.log(this.name);
        return null
    }
}

let cat10:Cat10 = new Cat10('cjy')
console.log(cat10.sayHi());
let cat11:Animal10 = new Cat10('')

//类和接口
interface Alarm{
    alert():void
}

abstract class Door{
    public abstract open():void
}

class securityDoor extends Door implements Alarm{
    alert(){
        console.log('响铃');
    }
    open(){
        console.log('开门');
    }
}

let sd1 = new securityDoor();
console.log(sd1.alert());
console.log(sd1.open());

//泛型
function createArray<T,U>(length:number,value:T,value2:U):Array<T|U> {
    let result:T[] = [];
    for(let i = 0 ; i < length ; i++){
        result[i] = value;
    }
    return result;
}

interface CreateArrayFn{
    createFn<T>(length:number,value:T):Array<T>
}

let createFn:CreateArrayFn = {
    createFn<T>(length:number,value:T):Array<T> {
        let result:T[] = [];
        for(let i = 0 ; i < length ; i++){
            result[i] = value;
        }
        return result;
    }
}

//类的泛型
class GenericNumber<T>{
    public constructor(public zeroValue:T){}
    add(x:T,y:T):number{
        console.log(x,y);
        return 0
    }
}
let generic = new GenericNumber<number>(0);
generic.zeroValue = 100
console.log(generic.zeroValue);

console.log(generic.add(10,20));





