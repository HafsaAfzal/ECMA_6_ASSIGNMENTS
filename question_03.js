// Write a function that takes an array of numbers and returns the maximum value. Use
// spread operator to pass the array elements as arguments to Math.max function.
function maxVal(a){
return Math.max(...a);
}
let arr=[2,4,67,55,100,0,2002];
let maximumVal=maxVal(arr);
console.log(maximumVal);