//例一
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
//注意闭包里面都包括什么
//什么时候普才会释放。


function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，查看有几个闭包
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);//113
f3(10);//114