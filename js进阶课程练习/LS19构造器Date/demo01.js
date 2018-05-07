//回顾

var arr1=[2,5,8];

arr1.forEach(function (a)
	{
		console.log(a,this);
	}
	);
console.log(arr1);


var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function (a)
		{
			console.log(a,this);
		},arr2);
console.log(arr1);

var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function (a,i)
		{
			arr3[i]=a>arr2[i]?a:arr2[i];
		},arr2);
console.log(arr3);


//
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));

//prev a ,cur: b ,i: 1
//prev ab ,cur: c ,i: 2
//prev abc ,cur: d ,i: 3
//abcd



//相当于加了一个x
//prev x ,cur: a ,i: 0
//prev xa ,cur: b ,i: 1
//prev xab ,cur: c ,i: 2
//prev xabc ,cur: d ,i: 3

