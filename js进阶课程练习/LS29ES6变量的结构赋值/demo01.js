//数组的解构赋值
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);


//let 也支持解构赋值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

//
let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);// "baz"

let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]

let [a,b,[c],d]=[{x:1},3,[true],456]

//如果没有匹配成功就是undefined

var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);
//undefined undefined

var [a,b]=[1,2];
//完成两个变量的定义赋值
//想让他们换个位置

var a=[1],b=["2"];
[a,b]=[b,a];
//直接交换
console.log(a,b);

var [foo=3]=[]
console.log(foo);
//允许有默认值
[x3,y3='b']=['a'];
[x4,y4='b']=['a',undefined];
//a b 
//a  b

//使用的是严等


function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);
//1

function f2() {
    return 2;
}
let [x7 = f2()] = [];
console.log(x7);
//2


let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1,n1,m2,n2,m3,n3);

//1 1 2 2 1 2


var [m4 = n4, n4 = 1] = [];
console.log(m4,n4);
//undefined  1

//有提升,相当于下面代码
var m4,n4;
m4=n4;
n4=1;


let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false or true


let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);
//输出[1, 3, 5]

