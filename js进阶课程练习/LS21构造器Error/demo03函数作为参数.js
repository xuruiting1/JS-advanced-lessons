try{
	function abc(x,cb)
	{
		console.log(x);
		cb();
	}
	abc("xxx",function(){
		var arr=new Array(-1);
	});
}
catch(e)
{
	console.log(e);
}
//能够捕获异常 


try{
	function abc(x,cb)
	{
		console.log(x);
		cb();
	}
	
}
catch(e)
{
	console.log(e);
}
abc("xxx",function(){
		var arr=new Array(-1);
});
//会报错，不会捕获异常
//异步执行
//回调函数可能存在   异常捕获捕获不到的问题
//因为已经使用了一个新的调用栈，不是之前的那个了，这个里面没有异常处理

