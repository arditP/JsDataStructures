var Stack = require('../dataStructures/Stack.js');
var stack = new Stack();

console.log("---------- Pushing Elements to the stack ----------");
for(var i = 10; i > 0; i--) {
	console.log("Pushing : %s in the stack", i);
	stack.push(i);
	stack.print();
}

console.log("Nr of elements in the stack is: " + stack.size());
console.log("------------ Element in front of stack --------");
console.log(assertPeek());
console.log("------------ Poping elements--------");
while(!stack.empty())
	console.log("Poping: " + JSON.stringify(stack.pop()));
function assertPeek() {
	var data = stack.peek();
	return (data !== null) ? ( data + " Found!") : (" No elements!");
}