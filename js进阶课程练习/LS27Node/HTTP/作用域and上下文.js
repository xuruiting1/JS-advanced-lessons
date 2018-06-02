//作用域
var globalvariable="this is global"

function globalfunciton()
{
    var localVariable="this is local variable"
    console.log("xuruiting1 Visit galbal/local");
    console.log(globalvariable);
    console.log(localVariable);
    globalvariable="This is changed variable"

    console.log(globalvariable)

    function localFunction()
    {
        var innerLocalVariable='This is inner local variable';
        console.log("xuruiting2 Visit galbal/local");
        console.log(globalvariable);
        console.log(localVariable);
        globalvariable="This is changed variable"
    }
}

//上下文

