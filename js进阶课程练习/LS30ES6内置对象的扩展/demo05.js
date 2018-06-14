var name='jack';

var p1={
    name,

}

var name="Jack";
var person={
    name,
    showInfo(){//直接写
        console.log(this.name);
    }
}
person.showInfo();
//输出Jack
//更加简洁，减少代码

//允许字面量定义对象，用表达式作为对象的属性名

let obj = {
    ['h'+'ello']() {
        return 'hi';
    }
};
obj.hello(); // hi

//不允许的，又使用表达式又使用简洁方式
var foo = 'bar';
var bar = 'abc';
// var baz = { [foo] };//报错



//和===的区别之处如下
console.log(+0 === -0); //true
console.log(NaN === NaN); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { c: 3 };
Object.assign(target, source1, source2);
target; // {a:1, b:2, c:3}




var obj = Object.create({x:1,y:2});
console.log(Object.getPrototypeOf(obj));//{x: 1, y: 2}
Object.setPrototypeOf(obj,{z:3});
console.log(Object.getPrototypeOf(obj));//{z: 3}

//通过自变量实现
var obj1 = {a:1, b:2};
var obj2={c:3,d:4};
Object.setPrototypeOf(obj2,obj1);
console.log(obj2.a,obj2.b,obj2.c,obj2.d);
//1   2   3  4 
Object.keys(obj2);
//["c", "d"]


var obj1 = {a:1, b:2};
var obj2=Object.create(obj1);
obj2.c=3;
obj2.d=4;
console.log(obj2.a,obj2.b,obj2.c,obj2.d);
//1  2  3  4 
Object.keys(obj2);
//["c", "d"]只在自身上的属性 


var obj = { foo: "bar", baz: 42 };
Object.values(obj);// ["bar", 42]
Object.keys(obj);


var obj = { foo: 'bar', baz: 42 };
Object.entries(obj);// [ ["foo", "bar"], ["baz", 42] ]
for(var [k,v] of Object.entries(obj)){ //解构赋值
    console.log(k,v);
}

