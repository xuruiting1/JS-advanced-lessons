//因为对象实例从原型中继承了constructor，所以可以通过constructor得到实例的构造函数
//确定对象的构造函数名、创建相似对象、constructor可用于指定构造函数
//开发者头条  掘金

//重复输出字符串

//（重要的事情说3遍）

//重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
function repeat(str, num) {
  // 请把你的代码写在这里
  var str1='';
  for(var i=1;i<=num;i++){
      str1+=str;  
  }
  // 在空字符串上，累加num次
  return str1;
  
}
repeat("abc", 3);


//slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
//截断字符串

//（用瑞兹来截断对面的退路）

//如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

//切记，插入到字符串尾部的三个点号也会计入字符串的长度。

//但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。

//当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。

//这是一些对你有帮助的资源:

//String.slice()

function truncate(str, num) {
  // 请把你的代码写在这里
  var str1="";  
  if(num<=3)  
    str1=str.slice(0,num)+"...";  
  else if(num>=str.length){  
    str1=str;  
  }else{  
    str1=str.slice(0,num-3)+"...";  
  }  
  return str1;  
}

truncate("A-tisket a-tasket A green and yellow basket", 11);


//猴子吃香蕉, 分割数组

//（猴子吃香蕉可是掰成好几段来吃哦）

//把一个数组arr按照指定的数组大小size分割成若干个数组块。

//例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

//chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];


//Array.push()
//Array.slice()

function chunk(arr, size) {
  // 请把你的代码写在这里
  var newarr=[];
  for(var i=0;i<arr.length;i=i+size){
    newarr.push(arr.slice(i,i+size));
  }

  return newarr;
}

chunk(["a", "b", "c", "d"], 2);

