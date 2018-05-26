// window.onload=function ()
// {
//     console.log("window onload");
//     var div1=document.getElementById("div1");
//     div1.onclick=function(){
//         console.log("div1 onclick");
//     }
//     div1.ondrag=function ()
//     {
//         console.log("div1. ongrag");
//     }
   
// }
window.onload=function(e)
{
    // console.log("e.target");
    // console.log(this);
    var div1=document.getElementById("div1");
    div1.onclick=function(e){
        console.log(e.type,e.target);
        console.log(e);
        console.log(e.__proto__);
        console.log(e.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__.__proto__);
    }
  
}
//e是触发的