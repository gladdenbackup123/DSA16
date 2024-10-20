let numbers = [5,3,1,8,2,7];
console.log(numbers);
// let arr = new Array(5);
// console.log(arr)

//Accessing elements with index
console.log(numbers[3]); //8
console.log(numbers[0]); //5

//length of array
let n = numbers.length;
console.log("length of the array is : "+n); //6

//traversal of array
for(let i=0 ; i<n ; i++){
    console.log(numbers[i]);
}