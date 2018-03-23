//函数定义 函数声明方式
function max(a,b){
    return a>b?a:b;
}
max(2,3);
//3

//函数定义 函数表达式方式 等号右侧可以是匿名函数也可以是非匿名函数
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);
//3

//函数定义 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
max(2,3);
//3
//注意，new的时候要大写function首字母

var str='return a>b?a:b';
var max=new Function('a','b',str);
max(2,3);
//3

