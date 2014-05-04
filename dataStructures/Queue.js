var LinkedList = require('../dataStructures/LinkedList.js');

var Queue = function() {
	this.list = new LinkedList();
}

Queue.prototype.push = function(data) {
	this.list.addToTail(data);
}

Queue.prototype.pop = function() {
	return this.list.removeFromHead();
}

Queue.prototype.empty = function() {
	return (this.list.length() == 0);
}

Queue.prototype.size = function() {
	return this.list.length();
}

Queue.prototype.front = function() {
	var head = this.list.getHead();
	return (head === null) ? null : head.data;
}

Queue.prototype.back = function() {
	var tail = this.list.getTail();
	return (tail === null) ? null : tail.data;
}

Queue.prototype.print = function() {
	this.list.print();
}

module.exports = Queue;