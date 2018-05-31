var request = new XMLHttpRequest();

//兼容问题  IE6不支持
if(window.XMLHttpRequest)
{
	request=new XMLHttpRequest();
}
else
{
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

//http通过网络进行通信的规则，一种无状态的协议，不会长期链接，浏览器和服务器之间
//建立TCP链接
//web向服务器发送请求命令
//发送请求头信息
//

//get 幂等，执行一次和一万一次是一样的。请求用于获取信息，使用URL传递参数，对发送的 信息的数量也有限制，一般在2000个字符左右。
//post 一般用于修改服务器的资源，对所发送信息的数量无限制。


响应包括：
三部分
一个数字或者是文字组成的状态码，用来显示请求是成功还是失败
响应头：响应头也和请求头一样包含许多有用的信息，例如服务器类型。日期类型。日期时间，内容分类型和长度
3、响应体：也就是响应正文

响应的状态码

三个数字
1开头是表示信息类，表示已经收到请求，正在进一步的处理中
2XX：成功，表示用户请求被正确接收，理解和处理例如：200  OK
3XX：重定向，表示没有成功，需要进一步的动作
4XX:客户端错误，表示客户端提交的请求有错误，例如：404 NOT  （例如地址不存在）
Found：意味请求中所引用的文档不存在
5XX：服务器错误，表示服务器不能完成对请求的处理，如  500


request.open("POST","create.php",true);
request.setRequestHeader("Content-type","application/x-www-gorm-urlencoded");//一般不发送文件都这样写，一定要写在这两句中间，不然会抛出异常
request.send("name=王二狗&sex=男");

responseText:获得字符串形式的响应数据
responseXML：获得XML形式的响应数据
status 和 statusText:以数字和文本的形式返回HTTP状态码
getAllResponseHeader();获取所有的响应报头
getResponseHeader();查询响应中某个字段的值

监听readyState属性
0请求未初始化，open还没有调用
1：服务器连接已经建立，open已经调用了
2：请求已经接受，收到头信息
3：请求处理中，也就是接收到响应主体课
4：请求完成，且响应已经就绪，就是响应完成了



var request=new XMLHttpRequest();
request.open("GET","get.php",true);
request.onreadystatechange=function()
{
	if(request.readyState===4&&request.status===200)
	{
		request.responseText;
	}
}






3-1
  PHP
  PHP是- -种创建动态交互性站点的服务器端脚本语言PHP能够生成动态页面内容
  PHP能够创建、打开、读取、写入、删除以及关闭服务器.上的文件PHP能够接收表单数据
  PHP能够发送并取回cookies
  PHP能够添加、删除、修改数据库中的数据PHP能够限制用户访问网站中的某些页面
运行PHP
XAMMP , https://www.apachefriends.org/download.html 

在Dreamweaver中配置web服务器用于本地测试
