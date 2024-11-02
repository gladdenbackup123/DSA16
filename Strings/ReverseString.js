let str = "naman"
let n = str.length

let reverse = ""

for(let i=n-1 ; i>=0 ; i--){
    reverse += str[i] //olleH
}
console.log(reverse)

//palindrome checker
if(str==reverse)
    console.log("Palindrome")
else
    console.log("Not palindrome")