//开始讲date

//Date提供了解析、管理和展示时间的功能
//通过构造函数创建Date对象的4种形式

var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);

var date3 = new Date("2017-08-09");//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
console.log(date3);
//一种时间格式

var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//逆运算是date4.getTime();

var date5= new Date();
console.log(date5);



//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);
//Invalid Date

//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);
//object
console.log(d2,typeof d2);
//string
//数据的类型不一样


//补充思考
var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);
console.log(n2,typeof n2);