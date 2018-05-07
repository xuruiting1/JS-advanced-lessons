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