function Student(name,sno)
{
    this.name=name;
    this.sno=sno;
}
Student.prototype.show=function()
{
    console.log("I'm",this.name,"我的学号是",this.sno)
}

module.exports = Student;