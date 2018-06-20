//函数内的 this是与函数定义时所在的对象绑定，而不是使用时所在的对象（避免this缺陷）
//大括号被解释为代码块，所以如果箭头函数直接返回一个对象，需在对象外面加上括号

function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// iSd: 21

//查看下例中箭头函数的写法和结果
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42


//可以避免this指向缺陷