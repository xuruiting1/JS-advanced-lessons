// ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
for (let codePoint of 'foo') {
    console.log(codePoint)
}
//f
//o
//o

for (let key in 'foo') {
    console.log(key);
}
//1
//2
//3


//提供新的方法用于查找、判断和生成字符串
var s = 'Hello world!';
s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true
//可以用正则实现,如下：

var reg=/^hello/gi;
var reg1=/\bhello/gi;//结尾是一个￥
'hello world'.replace(reg1,"*");
//"* world"
//第二个参数，表示开始搜索的位置
var s = 'Hello world!';
s.startsWith('world', 6); // true
s.endsWith('Hello', 5); // true
s.includes('Hello', 6); // false

"x".repeate(3)//'xxx'  重复


//repeat方法返回一个新字符串，表示将原字符串重复n次。
'x'.repeat(3); // "xxx"

'hello'.repeat(2); // "hellohello"

'na'.repeat(0); // ""

//参数如果是小数，会被取整。

'na'.repeat(2.9); // "nana"

//如果repeat的参数是负数或者Infinity，会报错。
'na'.repeat(Infinity);//Number类型的，NAN也是number类型
// RangeError

'na'.repeat(-1);
// RangeError

var reg=new RegExp(/abc/gi,'i').flag//i




