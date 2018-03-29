
// 高阶函数

// Part 1 函数作为参数被传递
// 高阶函数一般应用 
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});//  7
add(2,-3,Math.abs);//
add(2,3,Math.sqrt);//2的开平方加3的开平方

//练习使用高阶函数实现下述公式，要求函数复用,函数回调
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);

function foo(x,y,c1,c2){//c2,c1是函数对象
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(2,3,f1,f3);//-21
foo(6,5,f3,f2);//60
foo(7,8,f1,f2);//-5

//  高阶函数一般应用
var word_2 = "do another thing.";
var function_1=function(callback){
    this.word_1 = "do something.";
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();
};
var function_2=function(){console.log(this.word_2)};
function_1(function_2);



// 实例二 数组相关的高阶函数 map reduce filter sort
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]


//将数组所有元素改为数字类型
var result = ["1", "2", "3"].map(function(val) {
    return parseInt(val);
});
for (var i=0;i<result.length;i++){
    console.log(typeof result[i]);
}

//reduce 相当于 [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1, 3, 5, 7, 9];
arr.reduce(function f(x, y) {
    return x + y;
}); // 25

//filter 数组过滤 ，返回为false的将被过滤掉
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // 输出 [1, 5, 9, 15]

// sort 排序
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]


// Part 2 函数作为返回值输出
var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
     console.log('this1：',this);//obj   的
    return function fun2() {
          console.log('this2：',this);//window下的
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;//把函数对象给了3
obj.fun4 = fun1();//调用一次把结果给了4
console.log("输出：",obj.fun3());//返回函数对象
//输出
/*输出： ƒ fun2() {
        return this.x;//若改为 return this;
    }*/
console.log("输出：",obj.fun3()());//输出全局的12,可以通过绑定和间接调用来实现调用输出34，第三种就是软绑定
console.log("输出：",obj.fun4());//调用的主体是obj，返回34