var BmwFactory = /** @class */ (function () {
    function BmwFactory() {
    }
    BmwFactory.prototype.createSport = function (model) {
        if (model === "m4") {
            return new Bmw(model, 200000, 350);
        }
        if (model === "m3") {
            return new Bmw(model, 180000, 300);
        }
    };
    BmwFactory.prototype.createUsCar = function (model) {
        if (model === "x5") {
            return new Bmw(model, 108000, 180);
        }
        if (model === "x6") {
            return new Bmw(model, 111000, 200);
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
var producer = new BmwFactory();
var sportCar = producer.createSport("m4");
console.log(sportCar.show());
var usCar = producer.createUsCar("x6");
console.log(usCar.show());
