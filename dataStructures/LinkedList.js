var Node = function(data) {
	this.data = data;
	this.next = null;
}

var LinkedList = function() {
	this.head = null;
	this.tail = null;
	this.size = 0;
}

LinkedList.prototype.addToHead = function(data) {
	var node = new Node(data);
	if(this.head === null) {
		this.head = node;
		this.tail = node;
	}
	else {
		var temp = this.head;
		this.head = node;
		this.head.next = temp;
	}
	
	this.size += 1;
}

LinkedList.prototype.addToTail = function(data) {
	var node = new Node(data);
	if(this.head === null) {
		this.head = node;
		this.tail = node;
	} else {
		var temp = this.tail;
		temp.next = node;
		this.tail = node;
	}
	this.size += 1;	
}

LinkedList.prototype.find = function(data) {
	var current = this.head;
	while(current !== null && current.data != data)
		current = current.next;
	return (current !== null) ? current : null;
}

LinkedList.prototype.removeFromHead = function() {
	if(this.head !== null) {
		var current = this.head;
		this.head = current.next;
		data = current.data;
		if(current.next === null)
			this.tail = null;
		delete current;
		this.size -= 1;
		return data;
	}
	return -1;
}

LinkedList.prototype.removeFromTail = function() {
	if(this.head !== null) {
		var current = this.head;
		var prev = null
		while(current.next !== null) {
			prev = current;
			current = current.next;
		}
		if(prev !== null) 
			prev.next = null;
		else
			this.head = null;
		this.tail = prev;
		var data = current.data;
		delete current;
		this.size -= 1;
		return data;
	}
	return -1;
}

LinkedList.prototype.remove = function(data) {
	try {
		var current = this.head;
		var prev = null;
		while(current !== null && current.data != data) {
			prev = current;
			current = current.next;
		}

		if(current !== null) {
			// if the element is at the head
			if(prev === null) {
				this.head = current.next;
				this.tail = prev;
				delete current;
			} else if(current.next !== null) {
				// if the element is in the middle
				prev.next = current.next
				delete current;	
			} else {
				// the element is at the end of the 
				prev.next = null;
				this.tail = prev;
				delete current;
			}
			this.size -= 1;
			return 1;
		}

	} catch(e) {
		return -1;
	}
}

LinkedList.prototype.toString = function() {
	var current = this.head;
	var data = '[';
	while(current !== null) {		
		data += (current.next !== null) ? (JSON.stringify(current.data) + ', ') : (JSON.stringify(current.data));
		current = current.next;
	}
	data += ']';
	return data;
}

LinkedList.prototype.print = function() {
	console.log(this.toString());
}

LinkedList.prototype.length = function() {
	return this.size;
}

LinkedList.prototype.getHead = function() {
	return this.head;
}

LinkedList.prototype.getTail = function() {
	return this.tail;
}

LinkedList.prototype.iterator = function() {
	var current = this.head;
	return {
		hasNext: function() {
			return (current !== null);
		},
		next: function() {
			if(current === null)
				return null;
			var temp = current;
			current = current.next;
			return temp;
		}
	}
}

module.exports = LinkedList;