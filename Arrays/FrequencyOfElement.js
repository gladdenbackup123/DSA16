let x = 4;
let arr = [2,3,1,2,3,1,4,2,3];
let count = 0
let n = arr.length

for(let i=0 ; i<n ; i++){
    if( arr[i]==x )
        count = count + 1
}

console.log("Frequency of the element : "+count)