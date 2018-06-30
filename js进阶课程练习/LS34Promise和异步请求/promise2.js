//分两次，顺序依次执行

console.log('here we go');
new Promise(resolve=>{
    setTimeout(() => {
        resolve('hello');
    }, 2000);
})
.then(value=>{
    console.log(value);
    return new Promise(
        resolve=>{
            setTimeout(() => {
                resolve('world')
            }, 2000);
        });
})
.then(value=>{
    console.log(value + 'world');
});

//假如一个Promise已经完成了，再。then会怎么样
console.log('start');
let promise=new Promise(resolve=>{
    setTimeout(() => {
        console.log('the promise fulfilled');
        resolve('hello,world');
    }, 1000);
});

setTimeout(() => {
    promise.then(value=>{
        console.log(value);
    });
}, 3000);

//start
//2
//the promise fulfilled
//hello,world

//队列的状态，先进先出，按照固定的顺序执行
