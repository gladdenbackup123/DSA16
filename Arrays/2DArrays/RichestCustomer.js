//QuestionLink - https://leetcode.com/problems/richest-customer-wealth/

//SOlution -
var maximumWealth = function(accounts) {
    customers = accounts.length
    banks = accounts[0].length
    let maxWealth = 0

    for(let i=0 ; i<customers ; i++){
        let customerWealth = 0
        for(let j=0 ; j<banks ; j++){
            customerWealth += accounts[i][j]
        }
        if (customerWealth > maxWealth)
            maxWealth = customerWealth
    }
    return maxWealth
};