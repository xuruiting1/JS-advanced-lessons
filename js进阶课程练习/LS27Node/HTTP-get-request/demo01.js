var req = http.request(options,callback)
req.on("error",callback);
req.end();


var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': '一起期待下一期的课程',
    'cid': 348
})


// querystring从字面上的意思就是查询字符串，一般是对http请求所带的数据进行解析。querystring模块只提供4个方法，在我看来，这4个方法是相对应的。

// 这4个方法分别是querystring.parse和querystring.stringify,querystring.escape和querystring.unescape。


var https = require('https');
var querystring = require('querystring')//把一个对象序列化
var postData = querystring.stringify({
	'content':'视频视频视频视频，被洗脑',
	'mid':8837
})
