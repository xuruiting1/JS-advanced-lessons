//1、JS对象简介
//

var me={
	age:100,
	name:'un'
}


//- 内置对象（native object）由ECMAScript规范定义的对象或构造器对象（数组、函数等）
//宿主对象（host object）由JS解析器所嵌入的宿主环境定义的（如：window、document）
//- 自定义对象（user-defined object）运行中的用户自定义JS代码创建的对象

//函数也是对象


console.log(typeof Array);//f
console.log(typeof Function);//f
console.log(typeof Date);//f
console.log(typeof Number);//f
console.log(typeof String);//f
console.log(typeof Boolean);//f
console.log(typeof Math);//和上边一样么？为什么object
console.log(typeof JSON);//object


var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k =( new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error);
var n = new Function();
var o = new RegExp("\\d");

Math instanceof Object;//true
Math instanceof Function;//false