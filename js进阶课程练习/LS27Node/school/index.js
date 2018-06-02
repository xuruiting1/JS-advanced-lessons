var klass=require('./klass');

exports.add=function(klasses)
{
    klasses.forEach(function(item,index){
        var _klass=item
        var teacherName=item.teacherName;
        var students=item.students
        klass.add(teacherName,students)
    });
}

//模块流程

// 创建模块            teacher.js
// 导出模块            exports.add = function(){}   
// 加载模块            var teacher = require('./tecaher.js')
// 使用模块            teacher.add(""Scott)