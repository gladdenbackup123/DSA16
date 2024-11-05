let s = new Set();

s.add(2);
s.add(3);
s.add(4);
console.log(s);

if(s.has(4))
    console.log("Element is already present")
else
    console.log("This is a new element")