var Greeter2 = (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        console.log(this.greeting);
    };
    return Greeter2;
}());
var g2 = new Greeter2("Phuc");
console.log(g2.greeting);
g2.greet();
var g3 = new Greeter2("Eric");
g3.greet();
