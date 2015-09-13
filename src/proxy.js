var dto = { firstName: "Maxime", lastName: "Gaudin" };

var loggingHandler = {
	get: function (receiver, target) {
		console.log(`Getting property ${target}...`);
		return receiver[target];
	}
}

// Proxy unsupported in ES5 (and therefore cannot be polyfilled)
var dtoProxy = new Proxy(dto, loggingHandler);
dtoProxy.firstName;
