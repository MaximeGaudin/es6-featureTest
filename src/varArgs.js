function f(x,y,z) {
	return x + y + z;
}

var n = [1,2,3];
console.log(f(...n));

function g(...n) {
	return n.reduce((a,b) => a + b);
}

console.log(g(1,2,3));
