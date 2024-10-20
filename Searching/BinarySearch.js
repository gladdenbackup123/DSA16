function binarySearch(arr,x){
    let n = arr.length;
    let s = 0;
    let e = n-1;

    while(s<=e){
        let m = Math.floor((s+e)/2);
        if(x==arr[m])
            return m;
        else if( x>arr[m] )
            s = m+1;
        else
            e = m-1;     
    }

    return -1;
}   


let arr = [2,3,4,5,6,7,8,9]
x = 3
ans = binarySearch(arr,x);
if (ans==-1)
    console.log("ELement not found.")
else
    console.log("Element found at index: "+ans);