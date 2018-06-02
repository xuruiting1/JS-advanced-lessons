// var pet=
// {
//     words:'...',
//     speak:function()
//     {
//         console.log(this.words);
//         console.log(this===pet);
//     }
// }
// pet.speak();




// function pet(words)
// {
//     this.words=words
//     console.log(this.words)
//     console.log(this);//指向最顶层的那个变量，是global this===global
// }

// pet('...');


// 例三：

function Pet(words)
{
    this.words=words;
    this.speak=function ()
    {
        console.log(this.words);
        console.log(this);
    }
}

var cat= new Pet("MiaoMIao");
cat.speak();


//this 指向当前函数的拥有者，把拥有者叫做上下文

// 在函数内部   this是谁，取决于调用的方式，
