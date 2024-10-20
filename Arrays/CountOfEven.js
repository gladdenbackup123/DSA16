let arr = [5,2,1,4,7,8,6];
let n = arr.length;
let count = 0

for(let i=0 ; i<n ; i++){
    if (arr[i]%2==0)
        count++;
}

console.log("Count of even numbers is :"+count)