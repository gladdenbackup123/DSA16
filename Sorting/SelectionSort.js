let arr = [5,3,6,8,1];
let n = arr.length;

//Selection Sort for Ascending order

for(let i=0 ; i<n-1 ; i++){
    let mini = i;
    //find the minimum index
    for(let j=i ; j<n ; j++){
        if( arr[j] < arr[mini]){
            mini = j;
        }
    }
    // position - i 
    // minimum index - mini
    //swapping i and mini
    temp = arr[i]
    arr[i] = arr[mini]
    arr[mini] = temp
}

console.log(arr);