//回顾

//第一种
var obj1=
{
	name:'xuruiting',
	age:20,
	show:function ()
	{
		console.log('是小仙女');
	}
}

//第二种
var obj2= Object.create(obj);
obj2.age=20;

//第三种，先写一个构造函数，通过构造函数实例化一个对象。
function Person(age,name)
{
	this.age=age;
	this.name=name;
}
var obj3=new Person(20,'xuruiting');
obj3;

obj3 instanceof Person;

//true

//第二个参数  可以添加几个属性。用  create