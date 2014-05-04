var Map = function () {
	this.map = {};
}

Map.prototype.put = function(key, value) {
	this.map[key] = value;
}

Map.prototype.get = function(key) {
	return (key in this.map) ? this.map[key] : null;
}

Map.prototype.remove = function(key) {
	if(key in this.map)
		delete this.map[key];
}

Map.prototype.loop = function(callback) {
	for(var key in this.map) {
		console.log(key);
		callback(key);
	}
}

Map.prototype.size = function() {
	var size = 0;
	for(var key in this.map)
		size++;
	return size;
}

module.exports = Map;