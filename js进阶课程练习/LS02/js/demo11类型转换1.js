//类型转换方法

//其他类型转换为Boolean类型中
//undefined    false
//null   false
//布尔值   与输入相同，不用转换
//数字    0   NaN 转化成false  其他的都是true
//字符串  空的是false
//对象     总是true


if(new Boolean(false)){
    console.log("执行");
}
//输出 执行
//对象     总是true



console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false   特例
console.log(Boolean(1));//true
console.log(Boolean(""));//false
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true  对象



//其他转换为Number

//undefined   NaN
//null 0
//布尔   false 0  true 1
//字符串   空为零
//对象


console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NaN
console.log(Number("123.345xx"));//NaN
console.log(Number("32343,345xx"));//NaN
console.log(Number({x:1,y:2}));//NaN

console.log(parseFloat("123.345xx"));//123.345
console.log(parseFloat("32343,345xx"));//32343
console.log(parseInt("123.345xx"));//123
console.log(parseInt("32343,345xx"));//32343

//其他转换为String

console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//true
console.log(String(false));//false
console.log(String(0));//0
console.log(String(234));//234
console.log(String({x:1,y:2}));//[object object]