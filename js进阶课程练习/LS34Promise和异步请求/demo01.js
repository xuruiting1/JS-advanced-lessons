// JS异步几种形式
/*回调函数（简单容易理解，但耦合太紧密、多层回调时流程混乱不利于理解与维护）
事件监听（可绑定多个事件相应函数，但事件驱动，会使运行流程的清晰度下降）
订阅发布（观察者模式，与“事件监听”类似，通过常“消息中心”监控程序的运行）
 Promise（以同步思维方式编写异步代码，便于对代码的理解、代码追踪及异常捕获）*/

 //使用Promise的含义及作用
/*Promise 对象保存着某个未来才会结束的事件（通常是一个异步操作）的结果，可获取异步消息
Promise 对象是一个代理对象，被代理的值在Promise对象创建时可能是未知的
Promise 为异步操作的两种状态成功(fulfilled)和失败(rejected)分别绑定相应的处理方法
Promise 让异步方法可以像同步方法那样返回值，是一个能代表未来出现的结果的promise对象
Promise 对象可以类比订餐时给的订餐票（有了订餐票就可以畅想之后的行为）*/

//Promise中的几个基本概念
/*Promise对象中的执行器executor（有 resolve 和 reject 两个参数的函数 ，创建时会立即执行）
Promise对象有三种状态（pending进行中、fulfilled已成功、rejected已失败）
Promise对象的状态不受外界影响，只有异步操作的结果，可以决定当前应该为哪一种状态
状态之间可能发生的两种状态转换（pending ->fulfilled 或者 pending ->rejected）
状态发生转换后Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用*/

new Promise((resolve,reject)=>{
    console.log("start promise");
    //setTimeout(resolve,2000,"xx");
    setTimeout(()=>{resolve("xx")},5000)
}).then(
    (val)=>{console.log("val",val)},//成功
    (err)=>{console.log("err",err)}//失败
).then(
    (val)=>{console.log("val",val)},//成功
    (err)=>{console.log("err",err)}//失败
)

console.log("333");


new Promise((resolve,reject)=>{
    console.log("111");
    //setTimeout(resolve,2000,"xx");
    setTimeout(()=>{resolve("xx")},5000);
    console.log("222");
}).then(
    (val)=>{console.log("val",val)},//成功
    (err)=>{console.log("err",err)}//失败
).then(
    (val)=>{console.log("val",val)},//成功
    (err)=>{console.log("err",err)}//失败
)

console.log("333");
//顺序
//111
//222
//333
//5秒钟之后
//val xx
//val undefined