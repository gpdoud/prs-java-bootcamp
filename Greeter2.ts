class Greeter2 {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		console.log(this.greeting);
	}
}

var g2 = new Greeter2("Phuc");
console.log(g2.greeting);
g2.greet();
var g3 = new Greeter2("Eric");
g3.greet();