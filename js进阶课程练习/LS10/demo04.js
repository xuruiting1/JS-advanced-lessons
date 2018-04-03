//执行上下文指代码执行时的上下文环境（包括局部变量、相关的函数、相关自由变量等）
// JS运行时会产生多个执行上下文，处于活动状态的执行上下文环境只有一个

console.log("小明回家");//执行顺序 1
var xx = ["书桌","书包","铅笔盒"];//小明家中2
console.log("在家-做作业中 1 ...全局上下文");//3
function goToStore(){
    var yy = ["文具店老板","出售的文具"];//文具商店中//6
    console.log("在文具店-买文具中  ...函数1上下文");//7
    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");//8
    goToBank();//9
    console.log("在文具店-买好文具  ...函数1上下文 返回家");
}//13
function goToBank(){
    var zz = ["银行职员","柜员机"];//银行中//10
    console.log("在银行-取钱 ...函数2上下文 返回文具店");//11
}//12
//调用结束回到上一个函数。
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");//4
goToStore();//笔没油了，去商店买笔//5
console.log("在家-继续做作业...全局上下文");//14

//s进栈  B进栈  B出栈  S出栈

//例2

console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//设置断点
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//设置断点
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//设置断点
    }
    bar();
    console.log("foo上下文-end");//设置断点
}
foo();//设置断点
console.log("全局上下文-end");//设置断点
