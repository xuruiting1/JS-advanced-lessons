跨域
一个域名地址的组成:
//http://www    abc.com   8080   scripts/jquery.js
协议   子域名     主域名    端口号    请求资源地址
当协议、子域名、主域名、端口号中任意-个不相同时,都算作不同域。
不同域之间相互请求资源，就算作“跨域”

比如 http://www.abc.com/index.html  请求 http://www.efg.com/service.php


JavaScript出于安全方面的考虑，不允许跨域调用其他页面的对象。什么是跨域呢,简单地理解就是因为JavaScript同源策略的限制, 
a.com 域名下的js无法操作b.com 或是c.a.com 域名下的对象。

处理跨域  一：代理
在上海的服务其实是从后端
在北京服务器也建立一个服务，北京的其实是从后端去访问上海的 服务。然后返回给前端，然后北京是一个代理

（二）JSONP
JSONP可用于解决主流浏览器的跨域数据访问的问题


在www.aaa.com 页面中:    //声明
  <script>
  function. jsonp/ison){
  alert(json["name"]);
  </script>
  <script src="http://www.bbb.com/jsonp.js "> 
</script>
在www.bbb.com 页面中:   //调用
  jsonp({'name':'洪七','age':24));
  //为什么只对get请求做了改造，为什么对post没有
  //这种不支持post请求，局限性

//   处理跨域方法三一-XHR2
//   HTML5提供的XMLHttpRequest Level2已经实现了跨域访问以及其他的-些新功能
//   IE10以下的版本都不支持
//   在服务器端做-些小小的改造即可:
//   header('Access-Control-Allow-Origin:*');
//   header(' Access-Control-Allow-Methods:POST,GET');





