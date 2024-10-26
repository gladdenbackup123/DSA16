let M = [[2,3,5],[7,6,2],[8,1,3]]; //37

let r = M.length
let c = M[0].length

let total = 0
//Iterating a 2D array
for(let i=0 ; i<r ; i++){
    for(let j=0 ; j<c ; j++){
        total += M[i][j]
    }
}

console.log(total)