function Person()
{
	this.name='xuruiting';
	console.log('hi')
}


// 通过构造函数来创建对象   首字母要大写  这是习惯
//  当一个函数与new结合，该函数将作为构造函数来使用，用来创建JS对象
//  JS（ES5）中没有其他语言（C++、Java）中的类，JS中通过构造函数来实现类的功能（ES5中没有）
//  在JS中构造函数也是对象，有一个重要的属性（原型 prototype），该属性与继承相关

function Person(age,name) {
    this.name = name;
    this.age = age;
}


Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};


var p1 = new Person(20,"Jack");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();

var p=new Person(23,"xuruiting");
p.sayHi();
//sayhi  中的this  指向的就是  p1 

Person._proto_===Function.prototype;//true  再往下一层就是  object.prototype   第三层是null
Person._proto_===Object.prototype;//false
Person._proto_===object;//false


//属性和方法定义在构造函数中和写在prototype上这两种情况有什么不同
//（没有私有属性时，常将方法添加到构造函数的prototype属性上，实现方法共享，
//而属性根据情况来确定）


