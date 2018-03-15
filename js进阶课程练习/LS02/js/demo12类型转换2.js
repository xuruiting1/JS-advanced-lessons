//隐式类型转换方法


// 流程语句
var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);
}
// 输出h: {x: 1}

//比较运算符 
var a = 1;
var b = 2;
console.log(typeof (a>b),a>b);
console.log(typeof (a==b),a==b);
console.log(typeof (a<b),a<b);

//boolean false
// boolean false
// boolean true

//算数运算符 
var c = "img" + 1 +".jpg";
var d = "12" - 1;
console.log(c,d);

//img1.jpg 11

//逻辑运算符
var e = !12;
var f = !!34;
var g = !!{};
console.log(e,f,g);//输出false true true