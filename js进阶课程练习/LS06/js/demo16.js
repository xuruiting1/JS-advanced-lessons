//实际应用

var score=59;
console.log((score>90&&"优")||(score>750&&"良")||(score>60&&"及格")||"不及格");
//输出  不及格


//和上面实现的效果一样
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}