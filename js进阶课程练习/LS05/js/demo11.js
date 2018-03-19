//注意=与==（表达式要发反写，有什么好处）
var a = 34;
if(a = 45){
    console.log("是否会输出？");
}
//是否会输出？
undefined
var b = 34;
if(45 == b){//为什么要这样写，有什么好处
    console.log("是否会输出？");
}
//不输出
var a=34;
if(45=a)
{
	console.log("hi");
}
//会报错


//思考+=和/=的区别，隐式转换都换成什么