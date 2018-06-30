假如在.then()的函数里面不返回新的Promise，会怎么样

.then()接受两个函数作为参数，分别代表fulfilled和reject
.then()返回一个新的Promise 实例，所以它可以链式调用
当前面的promise状态改变时，.then()根据其最终状态，选择特定的状态响应函数执行

.then()里面有.then()的情况

then()返回的是Promise实例
会等then执行完，再执行外面的


错误处理

promise 会自动捕获内部异常吗、，并交给reject响应函数处理

