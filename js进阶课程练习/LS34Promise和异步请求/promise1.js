//promise对象用于异步计算，一个promise表示现在将来或永不可能可用的值

//一个promise表示一个现在，将来或永不可能可用的值

按照用途来解释，主要用于异步计算
可以将异步操作队列化，按照期望的顺序执行
返回符合预期结果

可以在对象之间传递和操作Promise,帮助我们处理队列

JS中有大量的异步操作

JavaScript未检查表单而生

异步操作的常见语法

1、事件侦听和响应
2、回调函数

异步操作以事件为主
回电主要出现在Ajax和File


需要先初始化一个实例，
new Promise(
    //执行器 executor
    function (resolve reject)
    {
        resolve();//数据处理完成
        reject();//数据处理出错

    }
).then(function A()
{
    //成功，下一步
},function B(){
    //失败，做相应处理
})

//例一
console.log('here we go');
new Promise(resolve=>{
    setTimeout(() => {
        resolve('hello');
    }, 2000);
})
.then(value=>{
    console.log(value+'world');
});

//here we go
//两秒钟之后
//helloworld