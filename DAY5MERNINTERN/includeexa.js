let emp=[{na:"Aadi",mob:111},
     {na:"Adhira",mob:112},
    {na:"charu",mob:202},
    {na:"elsa",mob:333}]
let newemp =emp.filter((emp)=>
{
    return emp.na.includes("A");
}
)
console.log(newemp)

