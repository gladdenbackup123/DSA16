s = "abcde"
let stack = []

for(let i=0 ; i<s.length ; i++){
    stack.push(s[i])
}

let reverse = ""

while(stack.length!=0){
    popped = stack.pop()
    reverse = reverse + popped
}

console.log(reverse)


