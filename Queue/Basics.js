let queue = []

queue.push(7) //7
queue.push(4) //7 4
queue.push(6) //7 4 6
queue.shift() //7 removed
queue.push(9) //4 6 9
console.log(queue) // 4 6 9

//peek
console.log(queue[0])