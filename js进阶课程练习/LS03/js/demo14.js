//字符串比较
console.log("A" > "a");
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B"));
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


//注意substr 与 substring的区别


var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表截取多少位长度，从2 到5
console.log(str13,str14);//abcdefghijklmn cdefg


var str15 = str13.substring(2,5);//后一个参数代表截取到第几个
console.log(str13,str15);//abcdefghijklmn cde



//字符串变换

var str4 = "aaa".concat("bbb");//返回字符串
var str5 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str6 = "abcDEF".toLowerCase();
var str7 = "abcDEF".toUpperCase();
//结果为：

//aaabbb
//abc def
//abcdef
//ABCDEF


var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var arr6 = "abcdef".split("c");//返回数组
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);
console.log(str2);//cdef 从第二个开始
console.log(str3);//cde  2-5但是不包括5
console.log(str4);//ef  倒数
console.log(str5);//cd
console.log(str6);//["ab", "def"]
console.log(str7);//["ab", "def"]
console.log(str8);//["ab", "def"]
console.log(str9);//c
console.log(str10);//100
console.log(str11);//3 第一个d
console.log(str12);//9
