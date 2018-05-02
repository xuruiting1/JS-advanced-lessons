//静态方法是构造器函数对象（类）的属性，原型方法是实例化对象（对象）的原型的属性
// 使用形式有什么不同，区别在哪里？（属性共享）
 //思考Object.getPrototypeOf(...)与Object.prototype.isPrototypeOf(...)
//原型方法  是在Array.prototype.push中定义的
//不是在Array.push中定义的。

Object.keys({x:1,y:2});//这是正确的



//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();//This is a prototype method
