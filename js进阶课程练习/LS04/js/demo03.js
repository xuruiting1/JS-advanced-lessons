if(true)
{
    var a=20;
}
console.log(a);
//输出20

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//报错么，输出啥？
//不会报错，输出
//in for  0
// in for  1
//in for  2
// in for  3
//in for  4
//out of for  5

if(false){
    var b = 30;
}
console.log(b);//undefinned