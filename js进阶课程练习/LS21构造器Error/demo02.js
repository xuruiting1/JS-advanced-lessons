console.log("xx");

console.warn("y");
//警告

console.error("zz");

console.assert(3>2,"如果前面是正确的，这句话就不会输出");

try{
	try{
		throw "oops";
	}
	catch(ex){
		console.error("inner", ex);
	}
	finally{
		console.log("finally");
	}

}
catch(ex)
{
	console.error("outer",ex)
}


//例二
try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.error("inner", ex.message);
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}
// Output:
// "inner" "oops"
// "finally"



//例三

try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.error("inner", ex.message);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}
//inner oops
//finally
//outer oops