function max(x,y)
{
	return x>y?x:y;
}
max(2,3);
//3


true && function(a,b)
{
	return x?y
}



最常见的两种形式

(function foo(x,y){...}(2,3));
(function foo(x,y) {...})(2,3);
!function(x,y)
{
	return x==y?true:false;
}('5',5);
//false


//注意看到function前面是否有东西，是否会立即执行


//立即执行表达式 两种常见常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("111");
})();//没有分号
(function () {
    console.log("222");
})()

//报错，没有分号



//与运算符结合的写法
var i = function(){
    return 10;
}(); 
//i为10


true && function(a,b){
    return a>b?a:b;
}(5,9);


!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);

//思考 !function(){return 2; }( ); 与 !function(){return 0; }();