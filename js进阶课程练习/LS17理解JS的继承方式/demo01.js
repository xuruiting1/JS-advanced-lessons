//每个对象都有一个原型对象（可动态的指定原型，来改变继承关系，最原始的原型是null）
 //思考并回答三种方式创建的对象的原型都是什么？
 //多个对象继承于一个原型时，存在原型共享（节省内存如共享方法，但也带来了共享问题）
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;//若此行写为subObj_First.x = 5;结果又是如何？
console.log(subObj_Second.x);
//输出  5


var superObj = {
	show:function(){
		console.log(this.x,this.y);
	}
    
};
var subObj_First = Object.create(superObj);
subObj_First.x=1;
subObj_First.y=2;
subObj_First.show();
//调用的主体是本身
//1   2
