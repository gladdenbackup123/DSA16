//Question Link - https://leetcode.com/problems/find-all-duplicates-in-an-array/
var findDuplicates = function(nums) {
    let seen = new Set();
    let duplicates = [];

    for(let element of nums){
        if(seen.has(element))
            duplicates.push(element)
        else
            seen.add(element)
    }

    return duplicates;
};