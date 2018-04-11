/**
 * Created by qile on 2017/8/14.
 */



//查看Scope窗体中getNumFuncs中每一个函数的内部属性[[Scopes]]中的第0个元素闭包中的变量，看是否存在共享问题
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//输出为3，tmp[0]()...tmp[9]()都为是期望的结果
//输出3

//局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出几？
        };//因为没有块作用域，并不是想象中的十个对象，应该建立十个作用域
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//涉及到变量共享的问题
//输出9
//不管是什么都输出9

