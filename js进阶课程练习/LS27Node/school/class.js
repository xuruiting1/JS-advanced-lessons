require
//node中没有全局命名空间的概念

var student=require('./student');

var student=require('./teacher');

teacher.add('Scott');

function add(teacherName,students)
{
    teacher.add(teacherName);
    students.forEach(function(item,index) {
        student.add(item)
        
    });

}

exports.add=add;