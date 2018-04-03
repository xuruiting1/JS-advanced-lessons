var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack
//找谁调用的，找到该函数，往上找，变量是谁。
//先是全局，遇到函数在解析函数。

//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出

if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错

//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    //var x = "inside f1";
    //如果没有这行，则两次输出都为outside，如果执行，则一次是inside f1,一次是outside f1
    console.log(x);
};
f1();
console.log(x);


//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();
console.log(y);//若函数内有var此行报错，若函数内没有var则此行输出全局变量y值
