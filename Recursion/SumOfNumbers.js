//Sum of Numbers from 1 to N

function sumOf(n){
    if(n==1)
        return 1;
    return n + sumOf(n-1);
}

console.log(sumOf(5));