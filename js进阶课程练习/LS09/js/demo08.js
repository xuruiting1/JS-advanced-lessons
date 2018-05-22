//在C和C语言会报错，在JS中可以
console.log(a);//undefined
var a=100;
console.log(a);//100

//JS解析执行过程

/*全局预解析阶段（全局变量和函数声明前置）
 全局顺序执行阶段（变量赋值、函数调用等操作）
 当遇到函数调用时，在执行函数内代码前，进行函数范围内的预解析
 当存在函数嵌套时，以此类推，会进行多次函数预解析
 */
//一本英文书，看一部分执行一部分。

console.log(a,b);//u  u
var b = 23;
console.log(a,b);//u  23
var a = b;
console.log(a,b);//23  23



console.log(obj1,obj2);
var obj1 = {x:23};
console.log(obj1,obj2);
var obj2 = obj1;
console.log(obj1,obj2);
obj2.x =25;
console.log(obj1,obj2);

//undefined undefined
 //{x: 23} undefined
 //{x: 23} {x: 23}
//{x: 25} {x: 25}


foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//f_2

console.log(foo);
var foo=function()
{
    console.log('foo');
};
foo();
//上述代码等效于
var foo;
console.log(foo);
var foo=function()
{
    console.log('foo');
};
foo();


AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();

