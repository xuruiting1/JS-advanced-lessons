
function foo(){}
console.log(foo); //
console.log(typeof foo); //
console.log(foo instanceof Object); //
console.log(foo instanceof Function); //
console.log(foo === window.foo); //


console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //obiect


var a=new Array(5);//五个元素的数组
var b=new Array("5");//一个元素  5  的数组


//思考：
console.log(typeof new Function());// 创建函数的第三种方式，结果是    function  函数对象  
console.log(typeof new Array());	 //  object
console.log(typeof new Date());	 // object

console.log(typeof new new Function());//object
console.log(typeof new new  new Function());//报错，一个对象不能实例化出来另一个对象

//补充思考：
console.log(Function instanceof Function);//t
console.log(Function instanceof Object);//t   是函数也是对象

console.log(Array instanceof Function);//t
console.log(Array instanceof Object);//t

console.log(Date instanceof Function);//t
console.log(Date instanceof Object);//t

console.log(Math instanceof Function);//f 不是函数
console.log(Math instanceof Object);//t

console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);//t

var person = function(name)
{
	this.name=name;
}
console.log(person instanceof Object);//t
console.log(person instanceof Function);//t
var p=new person('Jack');
console.log(p instanceof Object);//t
console.log(p instanceof Function);//false

var q=new p();//报错

var obj={
	x:12,
	foo:function(y){
		console.log(this.x,y);
	}
}
var obj2={
		x:34
}
obj.foo.call(obj2,"xx");//间接调用

var fee=obj.foo.bind;
fee()