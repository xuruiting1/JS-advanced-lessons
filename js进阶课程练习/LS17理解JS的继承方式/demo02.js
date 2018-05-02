//任何一个原型都是一个实实在在的对象

function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);

//测试如下代码，思考为什么，这样的继承有什么弊端
console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
s1.__proto__.name = "Jack";
console.log(s2.name);
s2.__proto__.__proto__.age = 99;
console.log(s2.age);

console.log(s1);
console.log(s1.__proto__);
console.log(s1.__proto__.__proto__);

//Student {id: 2017001}id: 2017001__proto__: Personname: "Jack"__proto__: age: 99showName: ƒ ()constructor: ƒ Person(name)__proto__: Object
 //Person {name: "Jack"}
 //{age: 99, showName: ƒ, constructor: ƒ}


 //改正版,经典代码，完整的继承关系


 function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);//等效于   s1调用了Person的方法  这个函数，不是通过new实例化出来函数
    this.id = id;				//this.name=name;
    							//this.age=age;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);//在实例化出来的对象上
var s2 = new Student("www",23,2017002);

