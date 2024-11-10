function fact(n){
    if(n==1)
        return 1;
    return n*fact(n-1);
}

console.log(fact(5))

// function fact(curr,n){
//     if(curr==n)
//         return n
//     return curr*fact(curr+1,n)
// }

// console.log(fact(1,5))