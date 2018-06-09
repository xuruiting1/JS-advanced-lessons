let {toString: s1} = 123;
console.log(s1); 
console.log(s1===Number.prototype.toString);//true

//ƒ toString() { [native code] }

(123).toString();//相当于转成了一个对象

(true).toString();



