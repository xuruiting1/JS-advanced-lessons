var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//可写性都是false   其他默认是false  不能访问到，那也就不能修改。
//console.log(obj.w);//有w，但上边for...in遍历不到


//JS对象访问器（访问器属性）的特性

//可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
//可枚举特性（[[enumerable]]），属性是否可枚举
//读取属性特性（[[get]]），在读取属性时调用的函数，默认是undefined
//写入属性特性（[[Set]]），在写入属性时调用的函数，默认是undefined



var obj1={
	_name:'Lucy',
	get name(){return this._name}
};

//例三
var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{//可以通过  defineProperty()来更改访问器属性
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);
//Lucy
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);
//Lucy






