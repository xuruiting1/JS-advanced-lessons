var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10

//如果传参数  undefinned   是不是还是有问题。

//传的参数是false的情况;
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//1

//补充内容

function foo(a,b){

	   return (a+b)||"和不能为0";

}

foo(-2,2);//输出  “和不能为0”

