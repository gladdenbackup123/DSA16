
var MyStack = function() {
    this.q1 = [];
    this.q2 = [];  
};

MyStack.prototype.push = function(x) {
    //Move all elements of q1 to q2
    while(this.q1.length !== 0){
        k = this.q1.shift()
        this.q2.push(k)
    }
    //Add new element x to q1
    this.q1.push(x)
    //Move all elements of q2 to q1
    while(this.q2.length !== 0){
        k = this.q2.shift()
        this.q1.push(k)
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if (this.q1.length===0)
        return true
    else
        return false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */