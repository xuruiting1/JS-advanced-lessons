//例一
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2

function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//1000
f();//1001

//单例模式例子

function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }//是闭包的一部分，并且常驻内存
};
var f = fn();
f();

//例子闭包
function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        //document.getElementById(objID).innerHTML = text;
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 2000);

var db = (function() {
// 创建一个隐藏的object, 这个object持有一些数据
// 从外部是不能访问这个object的
    var data = {};
// 创建一个函数, 这个函数提供一些访问data的数据的方法
    return function(key, val) {
        if (val === undefined) { return data[key] } // get
        else { return data[key] = val } // set
    };
// 我们可以调用这个匿名方法
// 返回这个内部函数，它形成了一个闭包
})();//立即执行

db('x'); // 返回 undefined 数据库的缩写
db('x', 1); // 设置data['x']为1
db('x'); 


//变量会存在变量共享的问题

function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        //(function(){
            var pos = i;
            var func = function(){
                return pos;//若是return i;的话最终输出是几？
            }
            result.push(func);
            //console.log(i,pos);
        //}());
    }
    return result;
}
console.log(f()[1]());


//解决  用立即执行表达式

function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        (function(){
            var pos = i;
            var func = function(){
                return pos;//若是return i;的话最终输出是几？
            }
            result.push(func);
            //console.log(i,pos);
        }());//创建三个独立的作用域
    }
    return result;
}
console.log(f()[1]());

//常驻内存

