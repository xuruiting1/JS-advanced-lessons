// == 与 ==

// == 
// （如果类型不同，先转换再比较，注：引用类型到基本类型的转换方向）
// === （若类型不同则false，若类型相同则判断同 ==）

{}==={}//  是false,因为是引用

3===3//true
NaN===NaN//特例 记住 false



console.log(3===3);//true
console.log(3==="3");//false
console.log(3=="3");//true
console.log(3==new String(3));//true
console.log(3===new String(3));//false


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//false
console.log(obj1 == obj2);//false
console.log(obj1 === obj2);//falses
console.log(obj1 == new String("xyz"));//false

var obj1 = new String("xyz");
var obj2 =obj1;
console.log("xyz"===obj1);//f
console.log(obj1 == obj2);//t  因为指向同一个空间
console.log(obj1 === obj2);//t
console.log(obj1 == new String("xyz"));//f



// != 与 !==
// ！=（相当于==的逆运算）
// ！==（先判断类型，若类型不同则返回true，相当于===的逆运算）


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//false
console.log(obj1 !== obj2);//true
console.log(obj1 != obj2);//true
console.log(obj1 != new String("xyz"));//true


onsole.log(2 == 2);//true
console.log(new Number(2) == new Number(2));
console.log(2 == new Number(2));



var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(true)};//转成布尔  true
console.log(obj1.x===obj2.x);//t
console.log(obj1.y===obj2.y);//f
console.log(obj1.z===obj2.z);//f
console.log(obj1.x==obj2.x);//t
console.log(obj1.y==obj2.y);//f
console.log(obj1.z==obj2.z);//f

var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(false)};
console.log(obj1.z==obj2.z);//true  这是为什么呢,
//因为写法错误，不能这麽写，会产生二义性。