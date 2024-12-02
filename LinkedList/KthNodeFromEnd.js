//Question Link - https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1

//Solution 1
class Solution {
    getKthFromLast(head, k) {
        //Find the length N
        let N = 0
        let temp = head
        while(temp != null){
            N +=1
            temp = temp.next
        }
        
        if(k>N)
            return -1
        
        //Reach (N-K+1)th node -> Taking N-k jumps from start
        temp = head
        for(let i=1 ; i<=N-k ; i++){
            temp = temp.next
        }
        
        return temp.data
        
    }
}

//Solution-2
class Solution {
    getKthFromLast(head, k) {
        //Keep slow at head , fast at kth node
        let slow = head
        let fast = head
        for(let i=1 ; i<=k-1 ; i++){
            fast = fast.next;
            if(fast==null)
                return -1
                
        }
        //Now slow is at head and fast is at kth node
        while(fast.next!=null){
            slow = slow.next 
            fast = fast.next
        }
        //fast will reach the last node , slow is answer
        return slow.data
    }
}