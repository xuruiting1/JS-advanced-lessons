if(true){
    var i = 0;//相当于是全局的，因为会提升出去
}

function foo(){
    console.log("j:",j);
    //undefined
    var j = 10;
    console.log("j:",j);
    //10
}
foo();

console.log("i:",i);
//0
console.log("j:",j);
//报错

//有函数作用域，没有块作用域，if什么的冲破大括号。
//JS采用的是静态词法作用域，代码完成后作用域链就已形成，与代码的执行顺序无关

//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;//局部的
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错