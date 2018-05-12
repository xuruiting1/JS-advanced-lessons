什么是正则表达式
正则表达式是对字符串和特殊字符操作的一种逻辑公式，是对字符串执行模式匹配的工具
正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本
JS中正则表达式是一个描述字符模式的对象，可以通过字面量、RegExp构造器来生成
//g  全局  i  忽略大小写


var reg1 = /[bcf]at/gi;//只要满足这种模糊匹配，满足公式的字符

//正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]


var str='aabbccdd';
str.replace('aa','xx');
//"xxbbccdd"
var str='a fAt bat,a faT cat';
var reg1=/[bc]at/gi;
str.replace(reg1,'xx');

var reg2=new RegExp(/fat/,'gi');
str.replace(reg2,'xx');

// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）
var regExp = /ab/i;
//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

//该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//["Ab", index: 2, input: "xxAbcaaBbxyz"]


