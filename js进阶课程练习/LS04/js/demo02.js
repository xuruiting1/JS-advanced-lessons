function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//不报错，输出  b:3;
console.log("a:",a);//报错
