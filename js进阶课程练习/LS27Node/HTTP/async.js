import { parse } from "path";




// var i=0;
// while(true)
// {
//     i++;
// }
var c=0;

function printIt()
{
    console.log(c);
}

function plus()
{
    setTimeout(function() {
        c+=1;
        callback();
    }, 1000);
    
}

plus(printIt);
printIt();
//单线程安全，谈女朋友一个一个的谈
//多线程允许脚踏多条船，但是要合理的分配资源


事件和事件驱动

