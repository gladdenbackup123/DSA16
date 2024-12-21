//Question Link - https://leetcode.com/problems/time-needed-to-buy-tickets/

var timeRequiredToBuy = function(tickets, k) {
    let q = []
    for(let i=0 ; i<tickets.length ; i++){
        q.push(i)
    }
    let time = 0
    while(tickets[k]!=0){
        person = q.shift()
        tickets[person] -= 1
        time +=1
        if (tickets[person] > 0)
            q.push(person)
    }
    return time
};