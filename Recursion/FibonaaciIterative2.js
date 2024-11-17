function fib(n){
    let fibo = new Array(n+1);
    fibo[0] = 0;
    fibo[1] = 1;

    for(let i=2 ; i<=n ; i++){
        fibo[i] = fibo[i-1]+fibo[i-2]
    }

    console.log(fibo)
    return fibo[n]
}

console.log(fib(8))