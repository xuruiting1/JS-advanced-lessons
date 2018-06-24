//作为属性名的Symbol
//由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性
//名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防
//止某一个键被不小心改写或覆盖，作为对象属性的具体形式如下

var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';/
// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"

var mySymbol=Symbol();
//1
var a={};
a[mySymbol]='Hello';
//2
//注意中括号内不要加引号，后面介绍加引号和不加引号的区别
//JavaScript中有两种方式来访问对象的属性，点操作符或者中括号操作符。
//两种语法是等价的，但是中括号操作符在下面两种情况下依然有效 - 动态设置属性 - 属性名不是一个有效的变量名。
//点号后加标识符（静态的）;
//中括号放字符串，字符串可以是动态的，obj['string'+variable];
//如果是静态的还是用点号方便;

var a={
    [mysymbol]:'Hello!'
};
//3
var a={};
Object.defineProperty(a,mySymbol,{value:'Hello!'});

var sy1=Symbol("xx");
var sy2=Symbol("xx");
var str1="xx";
var str2="xx";
var obj={};
obj[sy1]="12";//独一无二的
obj[sy2]="34";
obj[str1]="56";
obj[str2]="78";//属性覆盖
obj;

var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), { value: 'World!' });
console.log(obj);
//思考obj对象有几个属性   两个

//{Symbol(abc): "Hello!", Symbol(abc): "World!"}

var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';//.后面是一个字符串，
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
//上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，
//导致a的属性名实际上是一个字符串，而不是一个Symbol值。
//这里面也就是一个属性
a;
//{mySymbol: "Hello!"}


var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);//输出什么？如何解释Symbol
console.log(obj[myS2],obj["xx"]);
//123 undefined
//456 456


var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj["myS1"]);//undefined
console.log(obj["myS1"]);//undefined


//上面代码通过方括号结构和Object.defineProperty，
//将对象的属性名指定为一个Symbol值。
//注意，Symbol值作为对象属性名时，不能用点运算符，
//使用中括号是注意使用引号和不用引号的区别

var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
//上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个
//Symbol值。

//思考：
var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);//输出什么？如何解释Symbol
console.log(obj[myS2],obj["xx"]);
// console.log(obj["myS1"]);
// console.log(obj["myS2"]);

//同理，在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
// 如果不用[]的话相当于使用s对应的字符串定义属性
let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);
// 上面代码中，如果s不放在方括号中，
//该属性的键名就是字符串s，而不是s所代表的那个Symbol值。

// 采用增强的对象写法，上面代码的obj对象可以写得更简洁一些
let obj = {
    [s](arg) {console.log("xx");}
};

// 回顾ES6对象属性的表达式定义方法和ES6对象的简洁表示法，对于属性和方法定义的简洁表示法
//还有一点需要注意，Symbol值作为属性名时，该属性还是公开属性，不是私有属性


const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();
function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}

