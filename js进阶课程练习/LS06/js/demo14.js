//逻辑与、或的基本理解
console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2" == 2));
console.log(false&&false);

console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2" == 2));
console.log(false||false);


// 最常见情况（运算符两边的操作数都是布尔类型）
// 对于&&来说， 除了两侧都为真时为真，其他情况都为假
// 对于 | | 来说，除了两侧都为假时为假，其他情况都为真


// 当逻辑运算符&&和||两侧的操作数不是布尔类型时
//  首先将左操作数转换成布尔类型
//  对转换后的左操作数进行逻辑判断（true or false）
//  根据短路原则返回原始左操作数或原始右操作数
