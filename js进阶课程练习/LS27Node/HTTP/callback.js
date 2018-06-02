function learn(something){
    console.log(something)
}

function we(callback,something)
{
    something+='is cool';
    callback(something)
}
we(learn,'Nodejs ');

we(function(something){
    console.log(something)
},'xuruiting')

//同步
//后一个任务等待前一个任务执行结束
//异步
//
