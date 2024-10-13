let arr = [5,3,6,8,1];
let n = arr.length;

//Selection Sort for Descending order

for(let i=0 ; i<n-1 ; i++){
    let maxi = i;
    //find the maximum index
    for(let j=i ; j<n ; j++){
        if( arr[j] > arr[maxi]){
            maxi = j;
        }
    }
    // position - i 
    // minimum index - mini
    //swapping i and mini
    temp = arr[i]
    arr[i] = arr[maxi]
    arr[maxi] = temp
}

console.log(arr);