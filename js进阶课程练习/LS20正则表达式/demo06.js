var regExp = /a/i;
console.log(regExp.test("ab"));//t
console.log(regExp.test("ab"));//t
console.log(regExp.test("ab"));//t
console.log(regExp.test("ab"));//t

var regExp = /a/gi;//思考如果加了g，test中的lastIndex是会变的，跟着上一次的结果继续匹配
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 

var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);



//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项，正则对象的lastIndex不起作用

var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
//true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s"] 0
 //true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s"] 0
 //取消了g   每次都是从0开始，从0开始匹配，匹配结束U以后 lastIndex   都是0 



 //对于全局模式下 每检测一次lastIndex增加一次，再次用此正则对象匹配时，匹配的起始点为上一次的lastIndex
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);
//lastIndex为 6
//下一次从  6  继续开始索引

console.log(execExp2.exec(ts),execExp2.lastIndex);
//lastIndex为 14

写了g以后，每次都是考虑从哪里继续开始的，不是从0开始的
//(3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s"] 6
//(3) ["233", "3", "3", index: 11, input: "12s342dsfsf233s"] 14