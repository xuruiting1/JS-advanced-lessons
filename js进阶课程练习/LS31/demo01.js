//箭头函数

//复习如何解决this指向的问题，三种方式，软绑定，通过函数   通过call和apply
//ES5写法
var max=function (a,b)
{
    return a>b?a:b;
};
max(2,3);//3

//ES6写法
var max=(a,b) =>a>b?a:b;//一个函数
max(2,3);
//3
//一个参数可以不用加括号，没有问题

