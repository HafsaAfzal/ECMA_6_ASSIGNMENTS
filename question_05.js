// Write a function that takes an object with name, age and occupation properties and
// returns a new object with the same properties but with an additional id property. Use
// spread operator and shorthand property names to create the new object./
function info(person){
    let person1={...person , id:193132};
    return person1

}
const person={
    name:"Hafsa",
    age:20,
    occupation:"Developer"
}
let newPerson=info(person);
console.log(" object = ",person ,"new object = ", newPerson);