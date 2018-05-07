//date提供的方法

//静态方法（构造器函数对象的方法）
Date.now( )
Date.parse(dateTimeString) 
//转成毫秒，从1970年1月1日 00:00:00开始计算
Date.UTC(year,month,date?,hours?,minutes?,seconds?,milliseconds?)  
//转成毫秒 标准时间


console.log(Date.now());//一个毫秒
console.log((new Date()).getTime());//一个毫秒数字
console.log(Date.UTC(2018,5,7));

//Date原型方法 getter和setter相关

var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());

//2018年七月七号是星期几
var today=new Date();
today.setMonth(6);
console.log(today);
console.log(today.getDay());

//2019年5月七号是周几
var today=new Date();
today.setFullYear(2019);//直接传年份
console.log(today);
console.log(today.getDay());


var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());


