function a()

a.apply({},arr);

a.call({},arr[0],arr[1]);

a.call({},...arr);//会把数组一个一个的展开，是数组变为散列，
//如果只有一个参数，会封装起来


function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");//


function test() {
    console.log(Array.from(arguments));//console.log(test.arguments);
}
test("a","b","c");
//["a", "b", "c"]
三种方式


function test() {
    console.log(...arguments);//console.log(test.arguments);
}
test("a","b","c");
//a   b   c