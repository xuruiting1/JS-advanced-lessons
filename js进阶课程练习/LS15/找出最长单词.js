function findLongestWord(str) {  
  var str1 = str.split(" ");  // 字符串通过空格 <span style="line-height: 18.1818px; white-space: pre-line;">" " 分割为数组。</span>  
  
  var str2 = str1.sort(function(a,b){  
    return b.length-a.length;  // 对数组中每个元素的字符串长度进行比较，按照字符串长度由大至小排列数组顺序。  
  });  
  var lenMax= str2[0].length;  // 取出数组中第一个元素，该元素为<span style="color: rgb(51, 51, 51); font-size: 14px; line-height: 18.1818px; white-space: pre-line;">句子中最长的单词；</span>  
    return lenMax;          // 返回这个单词的长度值（一个数字）。  
}  



var array=str.split(" ");  
  var a=0;  
  for(var i=0;i<array.length;i++)  
    {  
      if(array[i].length>a){  
        a=array[i].length;  
      }  
    }  
   return a;  


//2首字母大写
function titleCase(str) {
  // 请把你的代码写在这里
  var arr=str.toLowerCase().split(" ");  
  for(var i=0;i<arr.length;i++)  
    {  
      arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1,arr[i].length);  
    }  
  arr=arr.join(" ");  
  return arr;  
}

titleCase("I'm a little tea pot");

//3找出多个数组中的最大数
//右边大数组中包含了4个小数组，
//分别找到每个小数组中的最大值，然后把它们串联起来，
//形成一个新数组。
function largestOfFour(arr) {
  // 请把你的代码写在这里
  var array=[];
  for(var i=0; i<arr.length;i++)
  {       //遍历
      arr[i].sort(function(a,b)
        {
          return b-a;                   //排序
        }
      )
      array.push(arr[i][0]);              //取值
  }
  return array;  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

