var BmwProducer = /** @class */ (function () {
    function BmwProducer() {
    }
    BmwProducer.prototype.delegation = function (type) {
        return type === "sport" ? new BmwSportFactory() : new BmwUsFactory();
    };
    return BmwProducer;
}());
var BmwSportFactory = /** @class */ (function () {
    function BmwSportFactory() {
    }
    BmwSportFactory.prototype.create = function (model) {
        if (model === "m4") {
            return new Bmw(model, 200000, 350);
        }
        if (model === "m3") {
            return new Bmw(model, 180000, 300);
        }
    };
    return BmwSportFactory;
}());
var BmwUsFactory = /** @class */ (function () {
    function BmwUsFactory() {
    }
    BmwUsFactory.prototype.create = function (model) {
        if (model === "x5") {
            return new Bmw(model, 108000, 180);
        }
        if (model === "x6") {
            return new Bmw(model, 111000, 200);
        }
    };
    return BmwUsFactory;
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
var producer = new BmwProducer();
var sportCar = producer.delegation("sport");
var m4 = sportCar.create("m4");
console.log(m4.show());
var usCar = producer.delegation("city");
var x6 = usCar.create("x6");
console.log(x6.show());
