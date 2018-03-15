"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
//"use stirct" 
console.log(isStrictMode());
//  输出false

'use strict'
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
//输出true

"use strict"
function f(a,a,b){
	return a+b;
}
f(2,3,4);
//在严格模式下会报错


function f(a,a,b){
	return a+b;
}
f(2,3,4);
//不会报错  输出7