var LinkedList = require('./LinkedList.js');

var Stack = function() {
	this.list = new LinkedList();
}

Stack.prototype.push = function(item) {
	this.list.addToHead(item);
}

Stack.prototype.pop = function(item) {
	return this.list.removeFromHead(item);
}

Stack.prototype.peek = function() {
	return (this.list.getHead() !== null) ? this.list.getHead().data : null;
}

Stack.prototype.empty = function() {
	return (this.list.length() == 0);
}

Stack.prototype.size = function() {
	return this.list.length();
}

Stack.prototype.print = function() {
	this.list.print();
}

module.exports = Stack;