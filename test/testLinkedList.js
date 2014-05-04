var LinkedList = require('../dataStructures/LinkedList.js');
var list = new LinkedList();

console.log("---------- Adding Elements to the Head of the List ----------");
for(var i = 0; i < 10; i++) {
	list.addToHead(i);
	list.print();
}
console.log("Nr of elements in the list is: " + list.length());
console.log("------------ Finding Elements in the List --------");
console.log(assertFind(10));
console.log(assertFind(9));
console.log(assertFind(12));
console.log(assertFind(1));
console.log("------------ Removing Elements from the List --------");
for(var i = 9; i >= 0; i--) {
	if(list.remove(i) == -1)
		console.log("Remove error: " + i);
	else
		list.print();
}

console.log("Nr of elements in the list is: " + list.length());
console.log("------------ Finding Elements in the List --------");
console.log(assertFind(10));
console.log(assertFind(9));
console.log(assertFind(12));
console.log(assertFind(1));

console.log("---------- Adding Elements to the Tail of the List ----------");
for(var i = 0; i < 10; i++) {
	list.addToTail(i);
	list.print();
}
console.log("------------ Iterating over List --------");
var iterator = list.iterator();
while(iterator.hasNext())
	console.log(iterator.next().data);
console.log("------------ Removing Elements from the Tail --------");
while(list.length() != 0) {
	list.removeFromTail();
	list.print();
}
console.log("Nr of elements in the list is: " + list.length());

function assertFind(data) {
	return (list.find(data) !== null) ? ( data + " Found!") : (data + " Not Found!");
}