//Error 对象及其子对象

// JS中的错误概述
// 当 JavaScript 引擎执行 JavaScript 代码时，会发生各种错误
// 可能是语法错误、或是由于浏览器差异产生的错误、或是来自服务器或用户导致的错误
// 有些错误是可以控制和避免的，有些是不可控的（比如来自用户输入等第三方的操作）



// JS中对错误的处理
// 优化代码避免可控错误，对不可控错误需要使用异常处理来进行处理，避免程序直接崩溃



// Error对象
// 当运行时错误产生时，会抛出一个错误对象，可以对此对象进行捕获和处理
// 也可以通过Error的构造器new一个错误对象，当检测到异常时或不满足逻辑时，手动抛出错误对象
// 所有错误对象的基础原型是Error.prototype，默认的name属性为“Error”，message属性为“”



// Error的子类
// ReferenceError 引用错误、RangeError 范围错误、TypeError 类型错误
// URIError 资源定位错误、EvalError  与eval( )有关的错误、其他错误

//可能是不安全的，可能会破坏词法作用域


//引用错误

try
{
    var x = y;// 没有定义y所以产生错误。如果有y的话，不会抛异常错误
    //console.log("x") = 23;//赋值引用错误，在chorme中测试
}catch(e){
    console.log(e.name,e.message);
}

//ReferenceError y is not defined


//类型错误 TypeError
try{
    var a;a.aa();// a根本不是一个类型错误
    function Circle(){};
    var a= new function Circle(){}
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");//有无异常该句都会执行
}


//自定义错误类
function UserError(message,name){
    this.message = message || '默认信息';
    this.name = name|| 'UserError';
}


UserError.prototype.__proto__ = Error.prototype;
// UserError.prototype = new Error();
// UserError.prototype.constructor = UserError;

继承于谁，


课下补充  XML和HTML的区别

还有JSON