function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);
//输出  123   不报错

//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);
//会报错，在严格模式下

//Uncaught ReferenceError: sloppyVar is not defined
//     at sloppyFunc (<anonymous>:3:15)
//     at <anonymous>:5:1
// sloppyFunc @ VM55:3
// (anonymous) @ VM55:5


function isStrictMode()
{
	var j;
	if(this===window)
	{
		j=false;
	}
	else
		j=true;
	return j;
}
console.log(isStrictMode());
//输出false