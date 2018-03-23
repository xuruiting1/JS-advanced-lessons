//prototype 原型
function test() {
    console.log(arguments);
    //console.log(test.arguments==arguments,arguments);//false
    // console.log(arguments.length);//2
    // console.log(typeof arguments);//object
    // console.log(arguments instanceof Array);//false
    // console.log(arguments instanceof Object);true
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"
//类数组对象不是真正的数组，长度也不包括方法属性





var o={}
o[1]=2;//还是对象

var a=[];
a[0]=1;//数组，有一个范围0——23啥的

a[-1]=2;//这是对应的属性存在
