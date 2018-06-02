url.parse()
//解析url，有三个参数

url.parse(url,true,true)
强制解析


// URL基础知识点
// protocol:表示url采用的什么协议
// slashes:表示是否有斜线
// host：表示主机
// post:端口（默认80端口不显示）
// hostname:主机名称
// protocol------底层使用协议
// slashes-------是否有协议双实线
// host----------域名
// port----------端口
// hostname------主机名
// hash----------哈希值


url.parse()//:将url字符串转换为url对象 
url.format()//:将url对象格式化为url 字符串 
url.resolve()//:用于解析，接受两个参数，拼接


// url.format("地址")  生成url地址

// url.resolve("HTTP://imooc.com",'/course/list');生成url地址

// url.parse("地址")；解析url地址成分


// 服务器拿到的是字符串