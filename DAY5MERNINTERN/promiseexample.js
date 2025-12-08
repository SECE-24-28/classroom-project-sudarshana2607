/*let res=fetch("https://jsonplaceholder.typicode.com/users")
console.log(res)*/

const res = fetch("https://jsonplaceholder.typicode.com/users").then(res=>
{
    return res.json()
}
) .then(users => 
{
    console.log(users)
}
)
console.log(res)
//ANOTHER METHOD
let fetch_API=async()=>
{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json();
    console.log(data)
}
fetch_API