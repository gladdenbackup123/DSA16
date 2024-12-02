//Question - https://leetcode.com/problems/middle-of-the-linked-list/

//Solution 1 - 

var middleNode = function(head) {
    //Length of the LL
    let temp = head
    let N = 0
    while(temp!=null){
        N+=1 
        temp = temp.next
    }

    //find mid 
    let mid = Math.floor(N/2)

    //Reach the middle
    temp = head
    for(let i=1 ; i<=mid ; i++){
        temp = temp.next
    }

    return temp;

};

//Solution 2 - 

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast!=null && fast.next!=null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
};