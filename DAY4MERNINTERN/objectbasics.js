let mob={brand : "Samgung", color:"Black"}
console.log(mob)

//Add new Key value pair
mob.price = 35000
console.log(mob)

//update
mob.price=4500
console.log(mob)

console.log(mob.color)
console.log(mob["brand"])
//delete
delete mob.brand
console.log(mob)

delete mob["color"]
console.log(mob)