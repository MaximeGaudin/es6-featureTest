require('babel/polyfill');

let numbers = {
	[Symbol.iterator]: function*() {
		let cursor = 1;
		for(;;) yield cursor++;
	}
}

for(var n of numbers) {
	if(n > 50) break;
	console.log(n);
}
