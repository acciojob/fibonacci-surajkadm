function fibonacci(num) {
	var current=1;
		var prev=0;

		for (let i = 0; i < num; i++) {
			var newFib=current+prev;
			prev=current;
			current=newFib;
		}
		return current
	}

module.exports = fibonacci;
