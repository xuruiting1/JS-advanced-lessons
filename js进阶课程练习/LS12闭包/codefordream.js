

//打印数组stu_names中学生的成绩(成绩顺序依次是语文、数学、英语
for(var i = 0; i < stu_names.length; i ++)
{
    var str_stu_score = stu_names[i]+'的成绩为 '+'语文'+all_scores[stu_names[i]][0]+' 数学'+all_scores[stu_names[i]][1]+' 英语'+all_scores[stu_names[i]][2];
    console.log(str_stu_score);
}

求平均
for(var i=0;i<stu_names.length;i++) 
{ 
    var sum_scores=0;
    for(var j=0;j<all_scores[stu_names[i]].length;j++) 
    { 
        sum_scores+=all_scores[stu_names[i]][j]; 
    }console.log(sum_scores/all_scores[stu_names[i]].length); 
} 



var chinese_sum_score = 0;
var math_sum_score = 0;
var english_sum_score = 0;
//查询数组stu_names中学生的成绩，并将他们的成绩详情拼接成一整个字符串，并打印出来
var str_stu_score_info = '下面是部分学生的成绩详情';
for(var i = 0; i < stu_names.length; i ++)
{
    str_stu_score_info = str_stu_score_info + '\n' + stu_names[i] + '\t' + '语文'+all_scores[stu_names[i]][0]+' 数学'+all_scores[stu_names[i]][1]+' 英语'+all_scores[stu_names[i]][2];
    chinese_sum_score += all_scores[stu_names[i]][0];
    math_sum_score += all_scores[stu_names[i]][1];
    english_sum_score += all_scores[stu_names[i]][2];
}
str_stu_score_info = str_stu_score_info + '\n' + '平均成绩' + '\t' + '语文'+ chinese_sum_score/3 +' 数学'+math_sum_score/3+' 英语'+english_sum_score/3;
//打印这几名学生的成绩详情
console.log(str_stu_score_info);


根据学生成绩all_scores和学生姓名stu_names，
找到变量stu_name是第几个学生，并逐个打印各科成绩，也就是说每科成绩用一个console.log进行打印
打印结果格式为：

第4个学生李鉴学的语文成绩为126
第4个学生李鉴学的数学成绩为135
第4个学生李鉴学的英语成绩为140



var all_scores = {'杨璐':[131,143,144],
    '王雪':[131,135,144],
    '韩林霖':[127,139,142],
    '沙龙逸':[123,148,136],
    '李鉴学':[126,135,140],
    '韩雨萌':[129,133,138],
    '刘帅':[116,143,140],
    '康惠雯':[114,142,139],
    '刘钰婷':[115,139,135],
    '林世博':[116,142,129]};
//存储所有学生的姓名.
var stu_names = ['杨璐','王雪','韩林霖','沙龙逸','李鉴学','韩雨萌','刘帅','康惠雯','刘钰婷','林世博'];
var stu_name = '李鉴学';
//查询'李鉴学'是第几个学生，以及他的各科成绩（按顺序依次为语文、数学、英语成绩）
var stu_course=['语文','数学','英语'];
var count=0;
var i=0;
for(; i < stu_names.length; i ++) 
{
    if(stu_names[i] !=stu_name) 
    {
        count++;
        
    }
    if(stu_names[i]===stu_name)
    {
         break;
    }     
}
var b=i;
for(var j = 0; j <3; j ++) 
{
    
    console.log('第'+count+'个学生'+stu_name+'的'+stu_course[j]+'成绩为'+all_scores[stu_names[b]][j]); 
}



for(var i = 0; i < stu_names.length; i ++)
{
    if(stu_names[i] === stu_name)
    {
        for(var j = 0; j < all_scores[stu_name].length; j ++)
        {
            if(j === 0)
            {
                console.log('第'+i+'个学生'+stu_name+'的语文成绩为'+all_scores[stu_name][j]);
            }
            if(j === 1)
            {
                console.log('第'+i+'个学生'+stu_name+'的数学成绩为'+all_scores[stu_name][j]);
            }
            if(j === 2)
            {
                console.log('第'+i+'个学生'+stu_name+'的英语成绩为'+all_scores[stu_name][j]);
            }
        }
    }
}
