// 2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");//和上面的function   是一样的
console.log(y);
console.log(y instanceof Constr);