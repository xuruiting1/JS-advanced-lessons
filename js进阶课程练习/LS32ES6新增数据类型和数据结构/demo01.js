// 如果你需要使用一个别人提供的对象，你对这个对象有哪些属性也不是很清楚，
// 但又想为这个对象新增一些属性，那么你新增的属性名就很可能和原来的属性名发送冲突
var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);
// 我们是不希望这种情况发生的。所以，我们需要确保每个属性名都是独一无二
// ES6引入了Symbol，用它来产生一个独一无二的值。


//ES5的对象属性名都是字符串，这容易造成属性名的冲突（参见Demo11中属性名冲突案例）
//ES6引入了一种新的原始数据类型Symbol，表示独一无二的值，通过Symbol函数生成
//Symbol变量属于基本数据类型（不是对象），
//Symbol前不能使用new命令
//Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要用于区分变量

let s = Symbol();//不能用new
typeof s;// "symbol"
var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1);//Symbol(foo)
console.log(s2);//Symbol(bar)

//Symbol的特点
//Symbol函数的参数只是表示Symbol值的描述，相同参数的Symbol函数的返回值是不相等的
//Symbol变量不能与其他值进行运算，但可转换成字符串类型

var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false 唯一
// 有参数的情况
var s1 = Symbol("foo");//如果传的不是字符串是一个变量的话，会自己默认调用toString方法，转换成字符串
var s2 = Symbol("foo");
s1 === s2 // false,唯一性

const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
sym 
// Symbol(abc)


//Symbol值不能与其他类型的值进行运算，会报错。
var sym = Symbol('My symbol');
"your symbol is " + sym;//报错
//但是，Symbol值可以显式转为字符串。
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'




