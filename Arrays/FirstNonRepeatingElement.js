//Question Link - https://www.geeksforgeeks.org/problems/non-repeating-element3958/1

//Solution 1 - Check count of all elements
function firstNonRepeating(arr) {
    let n = arr.length
    let i = 0
    
    for(let i=0 ; i<n ;i++){
        let count = 0
        for(let j=0 ; j<n ; j++){
            if(arr[i]==arr[j])
                count+=1
        }
        if(count==1)
            return arr[i]
    }
    
    return 0
}

let arr = [-1,2,-1,3,2]
console.log(firstNonRepeating(arr))