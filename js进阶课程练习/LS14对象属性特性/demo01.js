//三种形式定义对象
var obj1={x:1};

var obj2=Object.create(Obj1);
obj2.y=2;

var obj3=function()
{
	this.z=3;
}
//实例化对象
var Obj4=new Obj3();

//通过自变量的形式定义了一个属性
var obj3=function()
{
	this.z=3,
	m:function(){}
};
for(var k in obj)
{

}


JS对象属性（数据属性）的特性
- 属性的值（[[value]]），对应属性的值
- 可写特性（[[writable]]）	，确定属性是否可写性
- 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置- 可枚举特性（[[enumerable]]），属性是否可枚举

设置属性的特性（defineProperty方法设置enumerable

var obj={
	x:1,
	y:2
};
for(var k in obj)
{
	console.log(k,onj[k]);
}
//
//
//不可枚举类型
var obj={
	x:1,
	y:2
};
Object.defineProperty(obj,'x',{enumerable:false});
for(var k in obj)
{
	console.log(k,obj[k]);
}

//设置属性特例（writable  和  configurable）

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike



 
