//事件捕获：不太具体的节点应该更早的接收到事件，最具体的最后接收到
//事件冒泡：事件最开始由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播至最不具体的那个节点（文档）
//事件捕获，不太具体的节点应该更早的接收到事件，最具体的节点最后接收到事件
//html事件处理缺点，html和js代码紧密的耦合在一起，改代码变得复杂
//DOM0级的事件处理程序，就是把一个函数赋值给一个事件处理程序属性，简单，具有跨浏览器的优点

var eventUtil=
{
    //添加句柄
    addHander=function(element,type,handler)
    {
        if(element.addEventListener)
        {
            element.addEventListener(type,handler,false)

        }else if(element.attachEvent)
        {
            element.attachEvent('on'+type,handler);
        }else{
            element['on'+type]=handler;
        }
    },
    removeHander=function(element,type,handler)
    {
        if(element.removeEventListener)
        {
            element.removeEventListener(type,handler,false)

        }else if(element.detachEvent)
        {
            element.detachEvent('on'+type,handler);
        }else{
            element['on'+type]=null;
        }
    },
}

//事件的对象