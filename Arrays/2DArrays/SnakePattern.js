let matrix = [ [1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16] ]

let N = matrix.length
        
for(let i=0 ; i<N ; i++){
    if(i%2==0){
        for(let j=0 ; j<N ; j++){
            console.log(matrix[i][j])
        }
    }
    else{
        for(let j=N-1 ; j>=0 ; j--){
            console.log(matrix[i][j])
        }
    }
}