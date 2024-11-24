class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(1);
const d = new Node(8);

a.next = b;
b.next = c;
c.next = d;
let head = a;

//Traversing Linked List
let curr = head
while(curr != null){
    console.log(curr.data);
    curr = curr.next;
}