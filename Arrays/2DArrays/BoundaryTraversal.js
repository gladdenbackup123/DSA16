let matrix = [ [1,2,3,4] ]
let n = matrix.length

//First Row i=0
for(let j=0 ; j<n ; j++){
    console.log(matrix[0][j]) //00 01 02 03
}  

//Last column j=n-1
for(let i=1 ; i<n ; i++){
    console.log(matrix[i][n-1])
}

//Last Row i=n-1
for(let j=n-2 ; j>=0 ; j--){
    console.log(matrix[n-1][j])
}

//First Column j=0
for(let i=n-2 ; i>=1 ; i--){
    console.log(matrix[i][0])
}
