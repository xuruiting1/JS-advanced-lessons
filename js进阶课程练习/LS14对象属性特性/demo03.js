//什么是属性特性描述符
//属性特性描述符是一个用来查看对象属性的特性的对象
//该对象包含4个属性，对应4个特性，通过getOwnPropertyDescriptor方法获得

var obj={x:1};
Object.defineProperty(obj,'y',{value:2,writable:false});

var xDes=Object.getOwnPropertyDescriptor(obj,'x');
var yDes=Object.getOwnPropertyDescriptor(obj,'y');
console.log(xDes,yDes);

//给多个属性设置特性的方法（Object.defineProperties
//例二

var obj={_x:1};
Object.defineProperties(obj,{

})

var obj
