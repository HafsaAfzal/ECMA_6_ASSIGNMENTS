// Write a function that takes any number of arguments and returns an array with all the
// arguments. Use rest parameters to collect the arguments into an array.
function printArray(...rest){
    return(rest);
}
const result=printArray(7,5,8,9,2,0,1);
console.log(result);