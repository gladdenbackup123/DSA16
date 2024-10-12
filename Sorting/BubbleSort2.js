let arr = [6,1,2,7,4,8];
n = arr.length 

//Sorting in Descending Order

for(let i=1 ; i<n ; i++){ //passes
    for(let j=0 ; j<n-i ; j++){ //iterate array
        if(arr[j+1]>arr[j]){ //comparison
            temp = arr[j]
            arr[j] = arr[j+1] 
            arr[j+1] = temp 
        }
    }
}
console.log(arr);