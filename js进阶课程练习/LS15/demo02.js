//语言继承方式

// - JavaScript采用的是原型的继承方式，每个对象都有一个原型对象，最原始的原型是null

// - JavaScript的继承是对象-对象的原型继承，为面向对象提供了动态继承的功能
// - 任何方式创建的对象都有原型对象，可以通过对象的 __proto__ 属性来访问原型对象
 var a={};  //空对象
 a.__proto__; 
 var b=new Object();
 b.__proto__===Object.prototype;


 b.__proto__.__proto__;//null


 var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);//思考：多个对象同一个原型的情况
newObj.age = 23;

console.log(newObj.__proto__ === obj);
console.log(newObj2.__proto__ === obj);

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null


//例子  原型共享

var obj1={x:1};

var obj2=Object.create(obj1);

obj2.y=2;

var obj3=Object.create(Obj1);
obj3.y=3;