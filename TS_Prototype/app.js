var Tesla = /** @class */ (function () {
    function Tesla(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }
    Tesla.prototype.produce = function () {
        return new Tesla(this.model, this.price, this.interior, this.autopilot);
    };
    return Tesla;
}());
var prototypeCar = new Tesla("S", 80000, "black", false);
var car1 = prototypeCar.produce();
var car2 = prototypeCar.produce();
var car3 = prototypeCar.produce();
var car4 = prototypeCar.produce();
car1.interior = "white";
car1.autopilot = true;
console.log(car1);
console.log(car2);
