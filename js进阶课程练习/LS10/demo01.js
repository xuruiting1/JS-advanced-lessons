//全局作用
var a=10,
    b=20;
function fn()
{
	var a=100,
		c=200;
	function bar()
	{
		var a=500,
		d=500;
		console.log(a,b,c,d);
	}
	bar();
}
fn();