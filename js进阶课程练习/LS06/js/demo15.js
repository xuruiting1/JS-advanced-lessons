// 短路原则（忽略对右操作数的判断）
//  对于&&，转换后的左操作数若为true，则直接返回原始右操作数，若为false则
//  直接返回原始左操作数
//  对于| |，转换后的左操作数若为true，则直接返回原始左操作数，若为false则直  接返回原始右操作数- 通过短路原则，
// 可以用&&和| |来实现复杂的条件语句来代替if-else



console.log("abc"&&23);
//23
console.log(0&&1);
//0


 var a= (new Boolean(false))||23;
 console.log(a,typeof a);
//Boolean {[[PrimitiveValue]]: false} "object"


 var a= (new Boolean(false))&&23;
 console.log(a,typeof a);
// 23 "number"

//思考 所有对象转换为布尔类型 都为 true
console.log((new Boolean(false))&&234);
console.log((new Boolean(false))||234);