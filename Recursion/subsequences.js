let subsequences = [];
function generate(curr,s,i){
    if(i==s.length){
        // console.log(curr);
        subsequences.push(curr);
        return;
    }
    generate(curr+s[i],s,i+1)
    generate(curr,s,i+1)
}

s = "abc"
generate("",s,0)
subsequences.sort()
console.log(subsequences)
