//正则的语法概述和修饰符（g全局,i忽略大小写,m包含换行

//正则表达式在线分析工具 
//https://regexper.com/
//https://regex101.com/ 


//元字符：1 3  5 a b c 等

//转义字符：\t 、\v、\n、\r、\0、\f、\cX


//与\相关的预定义特殊字符：\d、\D、\w、\W、\s、\S、\b 、\B（注意大小写的含义）

//b代表边界，大小写是相反的

console.log(/oo/.test("moon"));
console.log(/oo\b/.test("moon"));
console.log(/oon\b/.test("moon"));
console.log(/\boo/.test("moon"));

console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

'a2d5'.replace(/\d/gi,'x');
//axdx
'a2d5'.replace(/\w/gi,'x');
//xxxx
'a2d5'.replace(/\D/gi,'x');
//x2x5
'a2d5'.replace(/\W/gi,'x');
//a2d5




//正则表达式特殊字符 一 （字符类）
//[ ]代表字符类，如[abc]代表abc中的任意一个字符，可以配合范围符号-如[a-c3-9]
//[^ ]代表字符类取反，如[^abc]代表非abc中的任意一个字符


//一个 - 代表范围，如[a-z] 、[a-z0-9A-Z]  包括  a 到  z 的所有字符

//一个 . 代表一个除了回车和换行符之外的所有字符 等效于[^\r\n]，（注意与*的区别和含义）
//正则表达式特殊字符 二 （边界相关）

//边界字符 ^ $ \b \B （注意^代表的意义与在[ ]中代表的意义不同）



// ^以谁作为开始
// $以谁 作为结尾
// \b 以谁作为一个边



不要弄混^
console.log(/oo/.test("moon"));
console.log(/oo\b/.test("moon"));
console.log(/oon\b/.test("moon"));
console.log(/\boo/.test("moon"));
\b 
\B不是一个边界
console.log(/oo\B/.test("moon"));
console.log(/oon\B/.test("moon"));//右边不是一个边界
console.log(/oo\B/.test("moon"));
console.log(/\Boo\B/.test("moon"));


var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.replace(/\dqe/);
console.log(newStr);
str.replace(/\dqe/,11223344);
console.log(str);


//正则表达式特殊字符 
//三 （量词）
//？出现0次或1次（最多1次）
//+出现1次或多次（至少1次） 
//*出现0次或多次（任意次）
//{n} 出现n次
//{n,m} 出现n到m次      
//{n,}出现至少n次

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));
//0Bb0b_0Bbb0ba

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));


var str = 'xx-xxy-xx';
var a =str.split('-');
console.log(a); 
//用 —进行分割

var str='xx-x*y-xx';
var a = str.split(/[-*]/gi);
console.log(a);

console.log('a2b3c4d'.replace(/[2-3]/,'x'));