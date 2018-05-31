var http = require("http");//引用了一个模块


var url = require("url");

var server=http.createServer(function (req, res) {
    console.log(url);
    //url  解析工具，生成一个字符串
    var getDataStr = url.parse(req.url).query;//parse函数中第二个参数为true的话返回一个对象
    //设置一个响应头，解决跨域代码


    res.writeHead(200, {
        "Content-Type": "text/plain",
        // res.writeHead(200, {"Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
        "Access-Control-Allow-Methods": "GET, POST"
    });

    //
    // setTimeout(function () {
    //     res.end("你好，我已收到你发的信息："+getDataStr);
    // },20000*Math.random());
    res.end("你的输入信息是你好，我已经收到你发的信息："+getDataStr);//把发过来的数据，原封不动的把他们数据扔回去，存在request里面
});
server.listen(8080,"127.0.0.1");//监听端口，有数据过来会调用那个函数

console.log("start server!");//yanzheng 富有有没有起来