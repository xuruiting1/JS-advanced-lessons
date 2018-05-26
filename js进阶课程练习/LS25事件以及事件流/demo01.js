// Event instanceof Function;

window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    //思考：将下述7到11行代码写在window.onload回调函数外会怎样
    //会报错，不再执行div2的事件

    div2.onclick = function () {
        console.log("div2 click");
    }
    // div2.onmouseover = function () {
    //     console.log("div2 mouseover");
    // }
}
function div1click() {
    console.log("div1 click");
    console.log("this:", this);
}

// div2.onclick = function () {
//     console.log("div2 click");
// }

