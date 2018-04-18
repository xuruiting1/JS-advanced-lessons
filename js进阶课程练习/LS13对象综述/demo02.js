console.log((new(new Function())) instanceof Function);
//false
new function  是一个实例化函数，然后再new 的时候就是一个对象
console.log((new(new Function())) instanceof Object);
//true

console.log(Object instanceof Function);//t
console.log(Object instanceof Object);//t
console.log(Boolean instanceof Function);//t
console.log(Boolean instanceof Object);//t
console.log(String instanceof Function);//t
console.log(String instanceof Object);//t
console.log(Number instanceof Function);//t
console.log(Number instanceof Object);//t
console.log(Function instanceof Function);//t
console.log(Function instanceof Object);//t
console.log(Array instanceof Function);//t
console.log(Array instanceof Object);//t
console.log(Date instanceof Function);//t
console.log(Date instanceof Object);//t
console.log(Math instanceof Function);//f
console.log(Math instanceof Object);//t
console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);//t

