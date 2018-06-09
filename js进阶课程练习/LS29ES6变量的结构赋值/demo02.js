var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);
//aaa  bbb
//等效于

var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"
console.log(foo4);// 报错，她不是一个声明的变量，键值就是负责匹配的

//
let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;
console.log(f,l);//注意和下边写法的区别

let { first, last } = obj1;
console.log(first,last);


var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World //若上边改为var { p: [x, { y:z }] } = obj2;还能输出y么？
思考console.log(p);//是报错？因为并没有p。p是用来匹配的


var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var {p} = obj2;//相当于p：p

console.log(p);//正常的可以得到P
//["Hello", {…}]


var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc: { start: { line }} } = node;
line // 1

//loc // error: loc is undefined
//start // error: start is undefined
//上面代码中，只有line是变量，loc和start都是模式，不会被赋值。

//对象也可以有默认值

