var BmwFactory = /** @class */ (function () {
    function BmwFactory() {
    }
    BmwFactory.prototype.create = function (type) {
        if (type === "x5") {
            return new Bmw(type, 108000, 300);
        }
        if (type === "x6") {
            return new Bmw(type, 111000, 320);
        }
    };
    return BmwFactory;
}());
var Bmw = /** @class */ (function () {
    function Bmw(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
    Bmw.prototype.show = function () {
        return this.model + " - " + this.price + " - " + this.maxSpeed + " ";
    };
    return Bmw;
}());
var factory = new BmwFactory();
var x5 = factory.create("x5");
console.log(x5.show());
var x6 = factory.create("x6");
console.log(x6.show());
