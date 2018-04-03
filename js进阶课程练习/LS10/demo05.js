//如果有多个文具店和多个银行，那么执行就有多种可能，形成不同的链式关系
//依然要遵从静态词法作用域（在A文具店，应该有A店老板，而不应有B店老板）


// （观察作用域链的变化）
console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");//设置断点
    var y = "文具店A环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_A 上下文-end");//设置断点
}
function goToStore_B(){
    console.log("goToStore_B 上下文-start");//设置断点
    var y = "文具店B环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_B 上下文-end");//设置断点
}
function goToBank_C(){
    console.log("goToBank_C 上下文-start");//设置断点
    var z = "银行C环境-";
    //console.log(x+y+z);不注释会报错。访问不到y，但是如果全局中有这个变量，就可以访问到，不会报错。
    console.log("goToBank_C 上下文-end");//设置断点
}
function goToBank_D(){
    console.log("goToBank_D 上下文-start");//设置断点
    var z = "银行D环境-";
    //console.log(x+y+z);
    console.log("goToBank_D 上下文-end");//设置断点
}
goToStore_A();//设置断点
// goToStore_B();//设置断点
console.log("全局上下文-end");//设置断点

//虽然是动态的链，但是仍然遵从静态词法作用域，//console.log(x+y+z);这句话是会报错的，他不能访问到y
//访问变量的时候遵从静态此法作用域。

// 将goToBank函数嵌套到goToStore函数中，3层的链，分析此时的作用域链
console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");
    var y = "文具店A环境-";
    function goToBank_C(){
        console.log("goToBank_C 上下文-start");
        var z = "银行C环境-";
        console.log(x+y+z);
        console.log("goToBank_C 上下文-end");
    }
    function goToBank_D(){
        console.log("goToBank_D 上下文-start");
        var z = "银行D环境-";
        console.log(x+y+z);
        console.log("goToBank_D 上下文-end");
    }
    goToBank_C();
    // goToBank_D();
    console.log("goToStore_A 上下文-end");
}

function goToStore_B(){
    console.log("goToStore_B 上下文-start");
    var y = "文具店B环境-";
    function goToBank_C(){
        console.log("goToBank_C 上下文-start");
        var z = "银行C环境-";
        console.log(x+y+z);
        console.log("goToBank_C 上下文-end");
    }
    function goToBank_D(){
        console.log("goToBank_D 上下文-start");
        var z = "银行D环境-";
        console.log(x+y+z);
        console.log("goToBank_D 上下文-end");
    }
    goToBank_C();
    // goToBank_D();
    console.log("goToStore_B 上下文-end");
}

goToStore_A();
// goToStore_B();
console.log("全局上下文-end");

//记得函数调用机制