// 1.给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
// 写一个function提取上述字符串中的字符最终输出：[254,289,675]

var s1= 'dgfhfgh254bhku289fgdhdy675gfh';
console.log(str2.match(/\d+/g));

// 2.给定这样一个连字符串，var s2 = "get-element-by-id";
// 写一个function转换为驼峰命名法形式的字符串输出：getElementById
var s2 = "get-element-by-id"
var s3=s2.match(/\w+/g);
function foo(s3)
{
	var s4;  
	for(var i=0;i<s3.length;i++)
	{
		s3[i]=s3[i].charAt(0).toUpperCase()+s3[i].substr(1,s3[i].length-1);
	}
	s4=s3.join(""); 
    return s4;  
}
foo(s3);

// 3、写出正则表达式，从一个字符串中提取链接地址。
// 如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
// 写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]
var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
var r1=s3.match(/\bwww\.[a-z0-9]*\.[a-z0-9]*/g);
console.log(r1);


var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
//var r1=/[a-zA-z]+://[^\s]/g;
var r2=/^http:/g

var m=s3.match(r2);
console.log(m);


var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
var r1=/^www.m$/g;
var m=s3.match(r1);
console.log(m);


var a = 'adsdfsefsdfsgsrgdsgasdfsadfe';
 /^a.*e$/.test(a)        //返回true;


var str = '321[哈哈][嘿嘿][哈哈][呵呵][哈哈][嘿嘿][哈哈]';
var reg = str.match(/(\[.*\]+)/ig);
alert(reg);

//为什么呢

var str='http://www.imooc.com';
var reg=/[a-zA-z]+://[^\s]*/g; 
console.log(reg.test(str));
