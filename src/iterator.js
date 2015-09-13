require('babel/polyfill');

let numbers = {
	[Symbol.iterator]() {
		let cursor = 1;
		return {
			next() {
				cursor += 1;
				return { done: false, value : cursor };
			}
		}
	}
}

for(var n of numbers) {
	if (n > 100) break;
	console.log(n);
}
