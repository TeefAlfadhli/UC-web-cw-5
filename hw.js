alert('مرحبا بك في موقعي! انا اسمي طيف، و سوف احسب درجتك')

let grade = prompt('ادخل درجتك من فضلك')

if(grade >= 90){
    console.log(' لقد حصلت على امتياز يا بطل')
}
else if(grade >= 80 || grade == 89)
{
    console.log('لقد حصلت على جيد جداً🤩')
}

else if(grade>= 70 || grade == 79)
{
    console.log('لقد حصلت على جيد🙂')
}

else if(grade>= 60 || grade == 69)
{
    console.log('لقد حصلت على مقبول😕')
}



else if(grade>= 50 || grade == 59)
{
    console.log('لقد حصلت على ضعيف☹️')
}


else 
{
    console.log('راسب💔')
}

