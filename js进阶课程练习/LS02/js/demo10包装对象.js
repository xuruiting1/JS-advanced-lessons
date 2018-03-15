// 数字、布尔还有字符串等基本数据类型都有对应的包装对象类型
// 比如：new Number(20);装箱，创建临时包装对象，基本类型及其属性不能改变

// 注意：临时对象在使用之后立即被释放


var a = 123;
var b = new Number(a);

console.log(a == b);//输出true
console.log(a === b);//输出false,因为a 是基本数据类型，b是一个对象

console.log(typeof(a));
console.log(typeof(b));
//输出number
//输出object

//临时包装对象的例子
var str = "abcde";
console.log(str.length);//输出5 临时包装成了String对象
str.length = 1;//不会报错，改了以后立刻释放
console.log(str.length,str);//输出5 "abcde" 临时包装对象并不影响原始值

var arr = [1,2,3,4];
console.log(arr.length);
//输出4
arr.length = 1;
console.log(arr.length,arr);
//输出    1 [1]
/*输出 5*/
/*输出 5 "abcde"*/
/*输出 4*/
/*输出 1 [1]*/