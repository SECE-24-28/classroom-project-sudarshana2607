let student=[{sna:"zara",mark:95,fee:true},{sna:"nila",mark:85,fee:false},{sna:"ravi",mark:75,fee:true}]
//for each example
student.forEach((stu)=>
    {
    console.log(stu.sna+" "+stu.mark)
  })
  //map example
let newstu = student.map((stu)=>{
    return {na:stu.sna,ma:stu.mark+5}
})
console.log(newstu)
//every example
let newstud =student.every((stu)=>
{
    return stu.fee===true
})
console.log(newstud)
//some example
let newstu1 =student.some((stu)=>
{
    return stu.fee==true
})
console.log(newstu1)
//filter example
let newstu2 =student.filter((stu)=>
{
    return stu.mark>=80
})
console.log(newstu2)