
//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);//boolean false
console.log(typeof (a==b),a==b);//boolean false
console.log(typeof (a<b),a<b);//boolean false 



//算数运算符 与 隐式类型转换 + -
var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);//img3.jpg 18
console.log(typeof(c));//string
console.log(typeof(d));//number

//逻辑运算符 与 隐式类型转换 + -
var e = !23;
var f = !!34;//!!""   !!0   !!"abc"  !!undefined  !!null
var g = !!{};
console.log(e,f,g);
console.log(typeof(e));//string
console.log(typeof(f));//number
console.log(typeof(g));//string


// 流程语句 与 隐式类型转换
var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);
    console.log(typeof(h));
}
//h: {x: 1}
//object


// Part2222222 显式类型转换
Boolean();
Number();
String();
Object();

123.456.toFixed(1);
toString();
toFixed();
toPrecision();
toExponential();

parseInt();
parseFloat();

toString();
valueOf();


