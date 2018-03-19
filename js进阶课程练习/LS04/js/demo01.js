// 上一章内容的回顾
//练习1
var a = [1,2,3];
var b = a;
console.log(a,b);//[1,2,3] [1,2,3] a和b都是引用指向了同一块空间
b.pop();
console.log(a,b);//[1,2] [1,2]
b = [4,5,6];//重新开了一块空间
console.log(a,b);//[1,2] [4,5,6]

//练习2
function foo(x) {
    x.push(4);
    console.log(x);//[1,2,3,456,4]
    x.length = 0;
    x.push(5,6,7,8);
    console.log(x);//[5, 6, 7, 8]
}
var b = [1,2,3,456];
foo(b);
console.log(b);//[5, 6, 7, 8]  这是为什么呢？有点不明白

//练习3
function foo(x) {
    x.push(4);
    console.log(x);//[1,2,3,456,4]
    x.push(5,6,7,8);
    console.log(x);//[1, 2, 3, 456, 4, 5, 6, 7, 8]
}
var b = [1,2,3,456];
foo(b);
console.log(b);//[1, 2, 3, 456, 4, 5, 6, 7, 8]
//因为练习2中在函数中把长度给改了，就没有了，数组就长度变了，元素也就没有了

var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}
//存在二义性


// 存在二义性的语句，要避免有二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}

// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

// 存在二义性的语句 补充二
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}
