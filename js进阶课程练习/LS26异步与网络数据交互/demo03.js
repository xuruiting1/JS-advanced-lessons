// 发布---
// 订阅模式又叫观察者模式，它定义了对象间的一种一对多的关系，
// 让多个观察者对象   同时监听某一个主题对象，当一个对象发生改变时，
// 所有依赖于它的对象都将得到通知- 发布---订阅模式的性质与“事件监听”类似，
// 但是我们可以通过常“消息中心”，了解存在   多少信号、每个信号有多少订阅者，
// 从而监控程序的运行



//发布订阅

var Subject = function(){//发布者
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }//遍历了所有的监听者，发布通知，都会调用
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};//观察者
var sub = new Subject()
sub.attach(new Observer('a'));//监听者
sub.attach(new Observer('b'));//监听者
sub.notify('hello');
//sub.print();

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    sub.notify('world');
    //sub.print();
},5000);

//Promise 参见ES6
//非常的重要
