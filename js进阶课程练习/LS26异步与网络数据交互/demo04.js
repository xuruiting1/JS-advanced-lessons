// Ajax
// AJAX = Asynchronous JavaScript and XML（异步 JavaScript 和 XML，也可用JSON）
// AJAX 是一种使用现有标准和技术的综合实现- 
// AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下
// 实现方式（XMLHttpRequest对象、jQuery中的ajax对象等）

// 监听readyState属性
// 0请求未初始化，open还没有调用
// 1：服务器连接已经建立，open方法已经调用了，但是sendf方法没有调用
// 2：请求已经接受，收到头信息send方法已经调用。尚未开始接受数据
// 3：请求处理中，也就是接收到响应主体，正在接受数据，HTTP响应头信息已经接受，但是尚未接受完成
// 4：请求完成，且响应已经就绪，就是响应完成了

//onreadystatechange请求状态改变的事件触发器
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    //console.log(xhr.readyState,xhr.status);
    if (xhr.readyState == 4) {
        //表示服务器的相应代码是200；正确返回了数据
        if (xhr.status == 200) {
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
//服务器发回来的时候才能执行这个代码


xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true);//先执行这个
//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加
xhr.send();//再执行这个