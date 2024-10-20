function search(arr,x){
    n = arr.length;
    for(let i=0 ; i<n ; i++){
        if(arr[i]==x)
            return i
    }
    return -1
}

let arr = [3,1,5,2,6,4,8]
x = 21
ans = search(arr,x);
if (ans==-1)
    console.log("ELement not found.")
else
    console.log("Element found at index: "+ans);



