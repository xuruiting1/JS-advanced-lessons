/**
 * Created by qile on 2017/8/14.
 */

/*
//变量共享问题
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//console.log("i：",i);
*/
//for循环立刻就执行完了
//下面是解决的办法


//通过IIFE解决变量共享问题
for (var i = 0; i < 5; i++) {
	console.log("xx:",i);
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
//x: 0
//xx: 1
//xx: 2
//xx: 3
// xx: 4

//Mon Apr 09 2018 15:22:16 GMT+0800 (中国标准时间) 0
//Mon Apr 09 2018 15:22:17 GMT+0800 (中国标准时间) 1
//Mon Apr 09 2018 15:22:18 GMT+0800 (中国标准时间) 2
//Mon Apr 09 2018 15:22:19 GMT+0800 (中国标准时间) 3
//Mon Apr 09 2018 15:22:20 GMT+0800 (中国标准时间) 4


//也是一块就执行结束了，但是给了它独立的作用域
//又把那个i的值给传进去了，所以解决了原来的问题

//第二种解决办法


for (var i = 0; i < 5; i++) {
	console.log("xx:",i);
    !function(j) { 
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    }(i);
}