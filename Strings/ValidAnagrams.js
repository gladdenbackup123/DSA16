//Question Link - https://leetcode.com/problems/valid-anagram/
var isAnagram = function(s, t) {
    s1 = s.split('').sort().join('')
    t1 = t.split('').sort().join('')

    if(s1==t1)
        return true
    else
        return false
};