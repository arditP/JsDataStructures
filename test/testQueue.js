var Queue = require('../dataStructures/Queue.js');
var queue = new Queue();

var time = new Date();
console.log("---------- Pushing Elements to the queue ----------");
for(var i = 0; i < 10; i++) {
	console.log("Pushing : %s in the queue", i);
	queue.push(i);
	queue.print();
}
console.log("Nr of elements in the queue is: " + queue.size());
console.log("------------ Element in front of queue --------");
console.log(assertFront());
console.log("------------ Element in the back of the queue --------");
console.log(assertBack());
console.log("------------ Poping elements--------");
while(!queue.empty())
	console.log("Poping: " + JSON.stringify(queue.pop()));
console.log("Time taken: " + (new Date() - time) + " ms");
function assertFront() {
	var data = queue.front();
	return (data !== null) ? ( data + " Found!") : (" No elements!");
}
function assertBack() {
	var data = queue.back();
	return (data !== null) ? ( data + " Found!") : (" No elements!");
}