//ES5中不能直接为函数的参数指定默认值，需通过 || 来实现

function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(url);
    console.log(body);
    console.log(method);
    console.log(headers);
}

fetch('http://example.com')

function foo(x,...y){
    console.log(y);
}
foo(1,2,3);//1  放在x身上，2,3到y中一个数组里面
//call  apply的切换


function a(x,y){
    console.log(x,y);
}
a.call({},1,2);
//1  2
