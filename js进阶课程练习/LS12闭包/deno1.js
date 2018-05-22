function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3);//输出？
console.log(f3);//输出？



//闭包实现的效果
function f1()
{
	var x=1;
	function f2()
	{
		return x++;
	}
	return f2;
}
var f3=f1();
console.log(f3());
console.log(f3());
console.log(f3);
console.log(f3);
//1
//2

//闭包是由函数和与其相关的引用环境组合而成的实体
//闭包是词法作用域中的函数和其相关变量的包裹体

//例一
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//  6
console.log(inc(2));// 8
var inc2 = createInc(5);//重新创建的，是独立的闭包。所以要重新开始
console.log(inc(1));// 9
console.log(inc2(1));// 6

//例二
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1
//例三
var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？s是自由变量
//如果没有函数内部的，虽然就能访问到，但是在闭包里面不包括它
function foo(x) {
    var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包，是返回的函数还有所处的作用域组成的，不包括自由变量
fee(10);//16
fee(10);//17
fee(10);//18