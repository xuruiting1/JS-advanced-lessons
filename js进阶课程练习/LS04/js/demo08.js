//case后面可以是表达式

//是三等的比较
//new Boolean(true)===返回false，直接到default
var i = 65;
switch(new Boolean(true)){ //思考若是改为 switch(new Boolean(true)){ 会怎样
    case i>=60:
        console.log('及格');
        break;
    case i<60:
        console.log('不及格');
        break;
    default:
        console.log('default');
}
// default

var i = 65;
switch(new Boolean(true)){ 
    case (new Boolean(i>=60))://new Boolean(true)===new Boolean(true)
    							// 无论两等还是三等都是不一样的，因为是引用
        console.log('及格');
        break;
    case (new Boolean(i<60)):
        console.log('不及格');
        break;
    default:
        console.log('default');
}
// default

var j = new Number(23);
switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}
// case_default