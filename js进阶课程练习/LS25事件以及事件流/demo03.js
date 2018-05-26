// DOM0级事件处理

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xuruiting");
    };
    //思考：覆盖还是两个语句都会输出？
    //输出    xuruiting
    //只会输出一个，不会都输出
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}





// DOM2级事件处理

//第一个参数type，事件的类型，如click，mouseover等；

//二参数 fn，事件监听执行的function；

//第三参数，决定事件执行的过程，捕获或者冒泡
//事件是先捕获再冒泡的
//而第三个参数就决定了是先捕获还是先冒泡，如果是true就是捕获，
//false是先冒泡
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xuruiting");
    });
    //思考：是覆盖还是两个语句都会输出？
    //都会输出，第一个输出坐标位置，比如  97 95
    //第二个还是会输出xuruiting



    // div2.addEventListener("click",eventHandler);
    // div2.addEventListener("click",eventHandler,false);
    div2.addEventListener("click",function(){
        console.log("xuruiting2");
    });

    //div2.removeEventListener("click",eventHandler);//取消事件响应处理

    // //自定义事件、事件分发、事件监听
    div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
    div2.dispatchEvent(new Event("MyEvent"));

    //思考DOM节点对象的继承关系
    
    //addEventListener、removeEventListener、dispatchEvent这3个方法都是定义在哪个原型上的？
    console.log(div2.__proto__);
    //HTMLDivElement {Symbol(Symbol.toStringTag): "HTMLDivElement", constructor: ƒ}
    console.log(div2.__proto__.__proto__);
    //HTMLElement {…}
    console.log(div2.__proto__.__proto__.__proto__);
    //Element {…}
    console.log(div2.__proto__.__proto__.__proto__.__proto__);
    //Node {ELEMENT_NODE: 1, ATTRIBUTE_NODE: 2, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, ENTITY_REFERENCE_NODE: 5, …}
    console.log(div2.__proto__.__proto__.__proto__.__proto__.__proto__);
    //EventTarget {Symbol(Symbol.toStringTag): "EventTarget", addEventListener: ƒ, removeEventListener: ƒ, dispatchEvent: ƒ, constructor: ƒ}

    //EventTarget 是一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器
    
}

