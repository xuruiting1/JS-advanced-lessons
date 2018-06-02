

var http=require('http')
http.createServer(function(req,res){//创建服务器
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('hello world/n')
    res.end()
})
.listen(2015)

//request是在哪里触发的。
//一直接搜request
//emit
//Apache ab 用于对HTTP性能测试
// 先把服务跑起来，到浏览器中访问一下，在命令行中输出
// ab -n1000 -c 10
// 一共1000次，并发  10

// 添上url地址，ab -n1000 -c10 http://localhost:2015/ 


// ab -n1000 -c10 http://www.baidu.com/


// 1.下载apache服务器  
// 2.cmd进入apache安装目录的bin文件夹
// 3.开始玩测试：ab -n1000 -c10 http://www.baidu.com/