//事件流指从页面中接收事件的顺序包括（冒泡流和捕获流）

//IE 提出的是冒泡流，而 Netscape 提出的是捕获流

//当页面中发生某种事件（比如鼠标点击，鼠标滑过等）时，子元素和父元素都会接收到该事件，具体顺序是怎样的呢？冒泡和捕获则描述了两种不同的顺序 

//冒泡：从最具体的节点到最不具体节点
//捕获：从最不具体的节点到最具体节点

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click",this,e.target);
        e.stopPropagation();//这样输出b  2 1 
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click",this,e.target);
    },false);//target输出的一直是最具体的那个

    div2.addEventListener("click",function (e) {
        console.log("div2 click",this,e.target,"1111");
    },true);//target输出的一直是最具体的那个

    document.addEventListener("click",function (e) {
        console.log("document click",this,e.target);
        
    },false);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("click",function (e) {
        console.log("body click",this,e.target);
    },true);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
}


//d b   2  1
//就把d   b改成true

// b 1 2 d
//把  b  1 改成true    2就是随便什么都可以true he   false都可以

//b   2   1   d
//把b改成true