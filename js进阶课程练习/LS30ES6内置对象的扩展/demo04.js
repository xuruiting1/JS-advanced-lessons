let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = Array.prototype.slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']


function foo(){
    console.log(arguments instanceof Array);//false
    console.log(arguments.constructor);//ƒ Object() { [native code] }
    console.log(arguments instanceof Object);//true
}
foo(1,2,3,'4','5');


function foo(){
    var arr=Array.prototype.slice.call(arguments);
    console.log(arr);
}
foo(1,2,3,"4","5");

//[1, 2, 3, "4", "5"]

// 从一个类数组对象，或者是一个数组中抽取出来
// 形成一个新的数组
// from尽可能给你转成一个数组

function foo(){
    var arr=Array.from(arguments);
    console.log(arr);
}
foo(1,2,3,"4","5");

var abc={a:1,"0":2,length:3};

var arr=Array.from(abc);
console.log(arr);
//[2, undefined, undefined]


// Array.of( )  可将一组值，转换为数组，弥补数组构造函数Array()的不足

var a=new Array(5);
var b=new Array("5");
console.log(a);
console.log(b);

// (5) [empty × 5]
// ["5"]

//Array.of方法用于将一组值，转换为数组。
Array.of(3, 11, 8); // [3,11,8]
Array.of(3); // [3]
Array.of(3).length; // 1

//这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
Array(); // []
Array(3); // [, , ,]
Array(3, 11, 8); // [3, 11, 8]

//上面代码中，Array方法没有参数、一个参数、三个参数时，返回结果都不一样。
//只有当参数个数不少于2个时，Array()才会返回由参数组成的新数组。
//参数个数只有一个时，实际上是指定数组的长度


//Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
Array.of(); // []
Array.of(undefined); // [undefined]
Array.of(1); // [1]
Array.of(1, 2); // [1, 2]
//Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组

//ES5可以用下面的代码模拟实现Array.of方法
function ArrayOf(){
    return [].slice.call(arguments);
}



ES6中Array新增的原型方法
Array.prototype.copyWithin( )
Array.prototype.find( ).Array.prototype.findIndex( )
Array.prototype.fill( ).Array.prototype.entries( )
Array.prototype.keys( ).Array.prototype.values( )
Array.prototype.includes( )


[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}); // 10




//数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
//然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
//Array.prototype.copyWithin(target, start = 0, end = this.length)
//它接受三个参数
//target（必需）：从该位置开始替换数据。
//start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
//end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
 [1, 2, 3, 4, 5].copyWithin(0, -2, -1);
 // [4, 2, 3, 4, 5]


//数组实例的find方法，用于找出第一个符合条件的数组成员。
//它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
//如果没有符合条件的成员，则返回undefined。
[1, 4, -5, 10].find(
    function(n){
        return n<0;
    }
);
//上面代码找出数组中第一个小于0的成员。
//[1, 4, -5, 10].find((n) => n < 0);
// -5 箭头函数的表示形式

[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}); 
// 10
//上面代码中，find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
[1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
}) 
// 2
//这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

//fill方法使用给定值，填充一个数组。
['a','b','c'].fill(7);
// [7, 7, 7]

//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['x', 'y', 'z'].fill(7, 1, 2);
// ['x', 7, 'z']
//上面代码表示，fill方法从1号位开始，向原数组填充7，到2号位之前结束

