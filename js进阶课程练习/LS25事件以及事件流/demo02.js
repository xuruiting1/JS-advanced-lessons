window.onload=function(e){
    console.log("window onload zuruiting1");
    console.log("e:",e);
    console.log(e.target);
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var eventHander=function(e)
    {
        // console.log(e);
        // console.log(e.target);


         console.log(e.clientX,e.clientY);//120 106
         console.log(this, "-----", e.target.id);// 输出<div id="div1"></div>"-----" "div1"是不一样的
        //考虑原型

         console.log(e);
         //MouseEvent {isTrusted: true, screenX: 125, screenY: 229, clientX: 125, clientY: 138, …}
        console.log(e.__proto__);
        //MouseEvent {…}
        console.log(e.__proto__.__proto__);
        //UIEvent {initUIEvent: ƒ, …}
        console.log(e.__proto__.__proto__.__proto__);
        //Event {NONE: 0, CAPTURING_PHASE: 1, AT_TARGET: 2, BUBBLING_PHASE: 3, …}
        console.log(e.__proto__.__proto__.__proto__.__proto__);
        //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

    }
    div1.onclick=eventHander;
    div2.onclick=eventHander;

    //自定义事件监听、事件分发
    document.addEventListener("xx",function(){console.log("11")});
    document.dispatchEvent(new Event("xx"));
}