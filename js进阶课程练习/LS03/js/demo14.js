
// 字符串常用方法

var str1="abcdef".slice(2);
var str2="abcdef".slice(2,5);
var str3="abcdef".slice(-2);
console.log(str1);//cdef
console.log(str2);//cde
console.log(str3);//ef


console.log("A" > "a");1 false
console.log("B".localeCompare("A")); // 1  
console.log("A".localeCompare("A")); // 0
console.log("A".localeCompare("B"));// -1


//substr 与 substring的区别


var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表截取多少位长度，从2 到5
console.log(str13,str14);//abcdefghijklmn cdefg


var str15 = str13.substring(2,5);//后一个参数代表截取到第几个
console.log(str13,str15);//abcdefghijklmn cde



//字符串变换

var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

