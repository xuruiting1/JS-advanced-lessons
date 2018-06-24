//作为属性名的Symbol的遍历特性
//Symbol作为属性名，该属性不会出现在for...in、for...of循环中
//也不会被Object.keys()、Object.getOwnPropertyNames()返回，
//但它也不是私有属性- 使用Object.getOwnPropertySymbols方法，
//可以获取指定对象的所有Symbol属性名
//例一
var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=456;
obj["s1"]=678;
obj.s2=910;
for(var k in obj)
{
    console.log(k,typeof k);
}
//s1 string
//s2 string
Object.getOwnPropertySymbols(obj).forEach((v) => {console.log(obj[v])});
//123
//456
//例二
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
// [Symbol(a), Symbol(b)]
//例三

var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i); // 无输出
}
Object.getOwnPropertyNames(obj);
// []
Object.getOwnPropertySymbols(obj);
// [Symbol(foo)]


//与Symbol变量复用相关的静态方法
//Symbol.for( )接受一个字符串作为参数，搜索有没有以该参数作为名称的Symbol值。
//如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值
//Symbol.keyFor( )方法返回一个已登记的Symbol类型值的key，字符串类型

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true



//Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。
// 它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
// Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在，
// 如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30次，每次都会返回同一个Symbol值，
// 但是调用Symbol("cat")30次，会返回30个不同的Symbol值。

console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false

//Symbol.keyFor方法返回一个已登记的Symbol类型值的key。

var s1 = Symbol.for("foo");

console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

//思考：
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);//f
console.log(s2 === s3);//f
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);//t
console.log(s2 === s4);//f


