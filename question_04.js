// Write a function that takes two arrays and returns a new array with the elements of
// both arrays concatenated. Use spread operator to combine the arrays.
function add2Arrays(arr1 , arr2){
    let arr3=[...arr1,...arr2];
    return arr3
}
let arr1=["let","var","const","arrow functions","destructuring"];
let arr2=["rest","default","spread","promises","classes"];
let combine =add2Arrays(arr1,arr2);
console.log(combine);