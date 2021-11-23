var Eng2 = /** @class */ (function () {
    function Eng2() {
    }
    Eng2.prototype.simpleInterface = function () {
        console.log("Engine 2.0 - works");
    };
    return Eng2;
}());
var EngV8 = /** @class */ (function () {
    function EngV8() {
    }
    EngV8.prototype.complecatedInterface = function () {
        console.log("Engine V8 - works");
    };
    return EngV8;
}());
var EngineAdapterV8 = /** @class */ (function () {
    function EngineAdapterV8(engine) {
        this.engine = engine;
    }
    EngineAdapterV8.prototype.simpleInterface = function () {
        this.engine.complecatedInterface();
    };
    return EngineAdapterV8;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function (engine) {
        engine.simpleInterface();
    };
    return Car;
}());
var myCar = new Car();
var oldEng = new Eng2();
myCar.startEngine(oldEng);
var newCar = new Car();
var engineAdapter = new EngineAdapterV8(new EngV8());
newCar.startEngine(engineAdapter);
// const nCar = new Car();
// const egineAdapter = new EngV8();
// nCar.startEngine(engineAdapter);
