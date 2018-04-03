//用立即执行表达式解决   无块作用域的问题。解决变量污染
(
	function()
	{
		if(true)
		{
			userID=234;
		}
	}
)

var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//忘记你使用过这个

var a=2,b=3;
if(a<b){
    var userId = 234;//提升以后
}
//变量污染，会输出234

//使用立即执行表达式解决这个问题
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//多人协同开发时很容易出现问题
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
//123