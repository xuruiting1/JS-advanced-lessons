//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack
//找到全局的name

var scope ="global";
function checkScope()
{
	var scope="local";
	return new function('return scope;');
}
console.log(checkScope()());
//global


var scope = "g";
function foo(){
	var scope = "l";
	return new Function("return scope;");
}
foo()();
//"g"