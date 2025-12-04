let student={na:"meena",age:22,marks:80,demo:function(){
    console.log("hai im "+this.na) }
}
    student.demo();
    //normal function use this keyword 
    //arrow function not use this keyword
    let stu={na:"meera",age:20,marks:90,samp:()=>{
    console.log("hai im "+this.na) }
}
    stu.samp();
