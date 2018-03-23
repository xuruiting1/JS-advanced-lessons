//值传递
var a = 1;
function foo(x) {
    console.log("a:",a," x:",x);//1   
    x = 2;//step 2222
    console.log("a:",a," x:",x);//1   1step 3333
}

console.log("a:",a);//1 2 
foo(a);// step 1111
console.log("a:",a); // step 4444  a仍为1



//引用传递
var obj = {x:1};
function fee(o){
    console.log("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;// step 2222
    console.log("obj.x :",obj.x," o.x :",o.x);// step 3333
}

console.log("obj.x :",obj.x);
fee(obj);// step 1111
console.log("obj.x :",obj.x);//step 4444  obj.x被改写为3

//打开index.html 学习chrome的Sources调试
document.onclick = function () {//测试Event Listener Breakpoints
    alert("click");
    //var body =  document.getElementsByName("body");
};

//打开index.html 学习chrome的Sources调试，还可以关注到每一个变量变化的过程
//跳转到下一行
//跳过函数体，不看细节
//一步一步执行
//跳出函数