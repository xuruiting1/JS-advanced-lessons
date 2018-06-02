var EventEmitter=require('events').EventEmitter
// 引入事件模块
// var EventEmitter = require('events').EventEmitter

// // 创建实例
// var life = new EventEmitter()
var life =new EventEmitter()
life.setMaxListeners(11);

function water(who)
{
    console.log('给'+who+'倒水');
}


life.on('求安慰',water)

life.on('求安慰',function(who){
    console.log('给'+who+'洗衣服');
})
life.on('求安慰',function(who){
    console.log('给'+who+'做饭');
})
life.on('求安慰',function(who){
    console.log('给'+who+'跪键盘');
})
life.on('求安慰',function(who){
    console.log('给'+who+'打扫卫生');
})
life.on('求安慰',function(who){
    console.log('给'+who+'操场');
})
life.on('求安慰',function(who){
    console.log('给'+who+'7');
})
life.on('求安慰',function(who){
    console.log('给'+who+'8');
})
life.on('求安慰',function(who){
    console.log('给'+who+'唱歌');
})
life.on('求安慰',function(who){
    console.log('给'+who+'跳舞');
})

life.on('求安慰',function(who){
    console.log('给'+who+'累死累死');
})

life.on('求抱抱',function(who){
    console.log('给'+who+'抱抱');
})

life.on('举高高',function(who){
    console.log('给'+who+'举高高');
})


life.removeListener('求安慰',water)
//life.removeAllListeners();//这样写所有的监听都被拿掉了
// life.emit("求安慰",'小哥哥');

life.removeAllListeners('求安慰');//需要传递具体的名字

var hasConfortListener=life.emit("求安慰",'小哥哥');

var hasgaoListener=life.emit("举高高",'小哥哥');

console.log(life.listeners('求安慰').length)
console.log(EventEmitter.listenerCount(life,'求安慰'))



// var hasplayListener=life.emit("play",'小哥哥');
console.log(hasConfortListener);//true
console.log(hasgaoListener);//true
// console.log(hasplayListener);//false
