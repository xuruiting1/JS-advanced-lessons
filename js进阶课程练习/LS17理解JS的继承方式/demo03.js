

function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);//如果不写这个  这是要形成一个继承关系
// console.log(Person.prototype.constructor); //实例化出来的student  就是
// console.log(Student.prototype.constructor); //
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);



var a=new Object ({});
Student.prototype 和  a 的层级关系是一样的。

con