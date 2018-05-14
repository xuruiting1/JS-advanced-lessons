//贪婪模式和非贪婪模式
"12345678".replace(/\d{3,6}/,'X');
//默认为贪婪模式  X78

"12345678".replace(/\d{3,6}?/,'X');
//也可以设置为非贪婪模式 在量词后加？
//X45678
//因为没有加全局
"12345678".replace(/\d{3,6}?/g,'X');
//添加全局 ，返回什么？
//XX78


//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));
//没有匹配到
//意思是name 后的e出现三次

console.log("NameNameName_11111".replace(/(Name){3}/,"X"));
//X_11111

//分组的作用
console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));
//a1b2c3d4e5

console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));

// 与分组相关的 或
"abcdefghijk".replace(/abcde|fghijk/g,"X");


"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");
//"abcdefghijk_X_X"

