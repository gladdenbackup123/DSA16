// charAt(index) - returns character at index
let s = "Javascript"
console.log(s.charAt(4))
console.log(s.charAt(8))
// console.log(s[4])

// toUpperCase() and toLowerCase()
console.log(s.toUpperCase())
console.log(s.toLowerCase())

//indexOf() 
console.log(s.indexOf("script")) //4
console.log(s.indexOf("t")) //9
console.log(s.indexOf("skip")) // -1 (not found)

//substring()
console.log(s.substring(2,6)) //vasc - 2 3 4 5
console.log(s.substring(3)) //ascript - 3 to end

//slice()
console.log(s.slice(2,6))
console.log(s.slice(-5))
console.log(s.slice(-7,-3))

//split()
let sentence = "Javascript is fun"
let words = sentence.split(" ")
console.log(words)

let s2 = "I-am-learning-Strings"
let list = s2.split("-")
console.log(list)

