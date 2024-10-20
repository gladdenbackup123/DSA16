//Link - https://leetcode.com/problems/missing-number/

//Solution 1 - Sort and Check
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length
    
    for(let i=0 ; i<n ; i++){
        if(i!==nums[i])
            return i
    }
    return n
};

//Solution 2 - Difference of Expected Sum and Actual Sum
var missingNumber = function(nums) {
    let n = nums.length
    let expectedSum = n*(n+1)/2

    actualSum = 0
    for(let i=0 ; i<n ; i++){
        actualSum += nums[i]
    }
    let ans = expectedSum - actualSum
    return ans
};