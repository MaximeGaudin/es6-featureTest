class A { 
	constructor(name) {
		this.name = name;
		this._hiddenName = '[HIDDEN] ' + name;
	}

	toString() { return this.name + ' ' + this._hiddenName; }
}

class B extends A { 
	constructor() {
		super('Inheritance is awesome');
	}
}

var t = new A('Hello');
console.log(t.toString());
console.log(t._hiddenname)

var u = new B();
console.log(u.toString());
