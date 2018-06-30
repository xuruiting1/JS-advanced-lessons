// 使用`Promise.all()`包装多个Promise实例
//返回一个新的promise包装实例
//接受一个数组作为参数
//数组里可以是promise对象，也可以是其他值，只有Promise会等待状态改变
//当所有的子promise都完成，该promise完成，返回值是全部值的数组

console.log('here we go');
Promise.all([1, 2, 3])
    .then( all => {
        console.log('1：', all);
        return Promise.all([ function () {
            console.log('ooxx');
        }, 'xxoo', false]);//不会等待
    })
    .then( all => {
        console.log('2：', all);
        let p1 = new Promise( resolve => {
            setTimeout(() => {
                resolve('I\'m P1');
            }, 1500);//组成的
        });
        let p2 = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve('I\'m P2');
            }, 1000);
        });
        let p3 = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve('I\'m P3');
            }, 3000);
        });
        return Promise.all([p1, p2, p3]);
    })
    .then( all => {
        console.log('all', all);
    })//会跳过
    .catch( err => {
        console.log('Catch：', err);
    });

 //[1, 2, 3]
 //[ƒ, "xxoo", false]

//["I'm P1", "I'm P2", "I'm P3"]