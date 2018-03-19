delete foo;
delete window.foo;
//true

'use strict';
delete foo;
//会报错
//严格模式下禁止删除未定义的变量

//严格模式下禁止函数参数重名

function f(a, a, b) {
    return a+b;
}
f(2,3,4);//非严格模式下正常执行 7

"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//严格模式下报错
