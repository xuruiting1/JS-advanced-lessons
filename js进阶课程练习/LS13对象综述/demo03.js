//JS对象属性的分类
 //数据属性（property，属性），字符串的键到值的映射（包括基本类型数据、对象、函数）
 //访问器属性（accessor，或称为访问器），访问属性的方法，注意：访问和设置时不加括号
 //内置属性（internal property）存在与ECMAScript规范中，不能直接访问

//内部属性  变量前面写上_

var o={
	//熟悉一下set  get  方法
	_x:1.0,
	get x()//这个x和下面的  this.x   不要同名   会报错
	{
		return this.x;//不要和上面同名
	},
	set x(val){
		this._x=val;
	}
};
console.log(o.x);//1
o.x=2;
console.log(o.x,o._x);


//例二
var o = {
    _x:1.0,//如果都写成x会怎样
    get x(){
        return this._x;//如果都写成x会怎样
    },
    set x(val){
        this._x = val;//如果都写成x会怎样
    }
};
console.log(o.x);//1   注意优先级
o.x = 2;
console.log(o.x,o._x);//2 2


var o = {
    _x:1.0,//如果都写成x会怎样
    get x(){//优先级高
        return this._x;//如果都写成x会怎样
    },
    
};
console.log(o.x);//1   注意优先级
o.x = 2;//因为没有set   方法 ，所有就相当于在上面o里面 设置了一个   x=2，
console.log(o.x,o._x);//1    1  还是1


//除了设置可读和可写，

//例四

var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");//请设置正常年龄
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);//23

//任何对象都是有原型的

var arr=[1,2,3];
arr._proto_;
arr._proto_===Array.prototype;
//true

//对象的原型
{}._proto_===Object.prototype//会报错  是小知识点

({})._proto_===Object.prototype;//false


var Person = function(name)
{
	this.name=name;
}
var p=new person('abc');
p._proto_===Person.prototype;
//任何一个对象都能找到null的这个根

//添加和删除自有属性
 //访问和修改自有属性
 //通过点与中括号访问属性的区别（写个访问属性的for循环练习）
var obj=
{
	x1:12,
	x2:23,
	x3:
}
for(var i=1;i<4;i++)
{
	console.log(obj['x'+i]);
}