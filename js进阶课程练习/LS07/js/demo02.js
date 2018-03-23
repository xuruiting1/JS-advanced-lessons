function foo
{
	console.log('foo');
}
foo===window.foo;//true  作为一个window的属性。调用 的就是window

//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//调用对象的方法23

var x = 45;
var text=function()
{
	console.log(this.x);
}
var obj={
	x:23
};
obj.text=text;
obj.text();//23
text();//45


var x=45;
var obj = {
    x:23,
    test:function(){
        function foo(){
        	console.log(this.x);
    	}
    	foo();
    }
};
obj.test();//45
//为什么
//嵌到函数里面

//3、通过call和apply间接调用 
//call
//用B直接调用但是要有近似的
//objA(foo.call(objB;x,y);
//objA(foo.apply(objB.[x,y]);
//调用的主体是函数的第一个参数，objA.foo();输出AA
objA={name:"AA"};
objB={name:"BB"};
objA.foo=function()
{
	console.log(this.name);
}
objA.foo();//AA
objA.foo.call(objB);//BB

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);//i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);//i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);//i'm:ABC i can fly ___ 7 8  我调用鸟的飞翔的方法
bird.fly.apply(me,[7,6]);//i'm:ABC i can fly ___ 7 6
bird.fly.apply(null,[7,6]);//i'm: i can fly ___ 7 6  对应的是全局