//Question Link - https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
    let curr = head;
    let prev = null;

    while(curr != null){
        let nxt = curr.next;
        curr.next = prev; //reverse

        prev = curr;
        curr = nxt;
    }

    //return the head of the reveresed linked list
    head = prev;
    return head;
};