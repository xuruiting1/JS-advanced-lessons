//新增的数据结构
//set
//类似数组，但是成员唯一，没有重复的值

//它类似于数组，但是成员的值都是唯一的，没有重复的值
//用Set构造函数来生成Set对象，用法类似实例化数组对象，通过new实例化Set对象
//通过add方法向Set结构加入成员，Set结构不会添加重复的值

var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);
//Set(6) {1, 2, 3, 4, 5, …}

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}

// 2 3 5 4

var set=new Set([1,2,3,3,4,4,5,6,8,8]);
console.log([...set]);
// [1, 2, 3, 4, 5, 6, 8]
//相当于去重

var set = new Set();
set.add({});
console.log(set.size); // 1
set.add({});
console.log(set.size);
 // 2
 //指向不同的空间

 var set = new Set();
 var a={};
 var b=a;
set.add(a);
console.log(set.size); // 1
set.add(b);
console.log(set.size);//1
//指向同一块空间


//关于Set的遍历方法
var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());//注意是什么类型，是否可迭代，是否可用for...of遍历
console.log(typeof set.values());
console.log(typeof set.entries());

//keys方法、values方法、entries方法返回的都是遍历器对象
for (var item of set.keys()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.values()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

//练习：使用解构赋值，将数据提取
for (var [key,value] of set.entries()) {
    console.log(key,value);
}