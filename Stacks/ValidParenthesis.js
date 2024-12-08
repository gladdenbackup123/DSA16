function check(s){
    let stack = []
    for(let i=0 ; i<s.length ; i++){
        if (s[i]=='(')
            stack.push(s[i])
        else{  // s[i] == ")" 
            if (stack.length==0)
                return false
            stack.pop()
        }
    }

    if (stack.length==0) //empty
        return true
    else
        return false
}

let s = "(()())"
console.log(check(s))
