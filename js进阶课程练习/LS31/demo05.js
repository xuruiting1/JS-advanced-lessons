function a()
a.apply({},arr);
a.call({},arr[0],arr[1]);
a.call({},...arr);//会把数组一个一个的展开，是数组变为散列，
//如果只有一个参数，会封装起来

//...Rest相当于合并若干参数为一个数组，主要用于函数定义时，代替 arguments，组解决arguments的弊端
function f(...y){
    console.log(y);
}
f("a","b","c");
//输出 ["a","b","c"]

//例一
//三种转换成数组的方式
function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");
//["a", "b", "c", callee: ƒ, Symbol(Symbol.iterator): ƒ]
function test() {
    console.log(Array.from(arguments));//console.log(test.arguments);
}
test("a","b","c");
//["a", "b", "c"]

function test() {
    console.log(...arguments);//console.log(test.arguments);
}
test("a","b","c");
//a   b   c

//例二
function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10

//比arguments使用更加灵活,比如只想看从第二个开始之后的参数
//例三
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");
//输出 "a",["b","c","d"]  
f("a",["b","c","d"]);
//输出 "a",[["b","c","d"]]
f("a");
//输出 "a",[]
f();
//输出 undefined,[]

//例四
function f(x,...y,z)
{
    console.log(y);
}//此时y输出是什么
f("a");
//报错，
//Rest parameter must be last formal parameter，REST参数必须是最后的形式参数

//part 2 ...Spread（扩展操作符）
// 主要用在函数的调用中使用（虽然也是...，但使用的场景不同）
// Spread将一个数组转换为用逗号分隔的参数序列，是...Rest的逆过程
// 在call和apply的转换过程中十分有用

function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);
f("a","b","c");
f("a");//输出 "a",[]
f();//输出 undefined,[]


//Part3call与apply的转换 两者之间的区别通过...Rest和...Spread转换
function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);
// [1, 2, 3]
//等效于 
abc.apply(o1,[1,2,3]);
// [1, 2, 3]
//合并元素为数组（...Rest） 与 拆分数组为各个元素(...Spread)


