//JS中的时间复合ISO8601扩展格式标准
//日期格式
//YYYY-MM-DD 、 YYYY-MM 、 YY


console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());

console.log(Date.parse("2010-01-01T11:12:23.111Z"));
//有没有Z是区分时区和不区分时区
console.log(new Date("2010-01-01T11:12:23.111Z"));
console.log(new Date().toISOString());

//时间格式，注意：不同宿主环境下可能存在差异
//THH:mm:ss.sss、THH:mm:ss.sssZ 、THH:mm:ss、THH:mm:ssZ、THH:mm、THH:mmZ
//完整的日期时间格式
//YYYY-MM-DDTHH:mm:ss.sssZ
//时间比较与运算（转换为毫秒后进行比较和运算）

console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
//true

console.log(new Date("1970-01-02") - new Date("1970-01-01"));
//86400000  一天的毫秒值
console.log(new Date((new Date("1970-01-01").getTime())+86400000));



//50天后是几月几号，星期几？
var today=new Date((new Date("2018-05-07").getTime())+86400000*50);

//50天后是几月几号，星期几？
var today=new Date();
var newDate=new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);

