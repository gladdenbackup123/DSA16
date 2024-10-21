//Question Link - https://www.geeksforgeeks.org/problems/key-pair5616/1

//Solution -1 : Check all pairs
class Solution {
    twoSum(arr, target) {
        let n = arr.length
        for(let i=0 ; i<n ; i++){
            for(let j=i+1 ; j<n ; j++){
                if(arr[i]+arr[j]==target)
                    return true
            }
        }
        
        return false
    }
}

//Solution -2 : Sort and use two pointers
class Solution {
    twoSum(arr, target) {
        let n = arr.length
        let i = 0
        let j = n-1
        arr.sort((a,b)=>a-b)
        while(i<j){
            if(arr[i]+arr[j]==target)
                return true
            else if(arr[i]+arr[j]<target)
                i++
            else
                j--
        }
        
        return false
    }
}