//JS中异常处理的作用

异常处理的语法：try 
var a new Array(-5);//报错

try {
	var a=new Array(-5);
	console.log("xx")//前面有错误，将不会执行这一句话
}
catch(e)//必须有一个catch  或者 是finally
{
	console.log(e);
}
finally{
	console.log("finally");
}	


try{
	console.log("x");//能正常执行，不会抛出异常
}
catch(e)//不会执行这里面的东西
{
	console.log(e);
	console.log("yy");
}