//一般不用 for ...in 遍历数组
//一般用来遍历对象
//例一
var a={x:10,y:20,z:"30"};
for(var k in a)
{
	console.log()(k,a[k],typeof a[k]);

}
//例二
var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;
obj2.z = 3;
for(var k in obj2){
    console.log(k,obj2[k]);
}
