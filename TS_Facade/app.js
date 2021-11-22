var ConveyorFacade = /** @class */ (function () {
    function ConveyorFacade(conveyor1, conveyor2) {
        if (conveyor1 === void 0) { conveyor1 = null; }
        if (conveyor2 === void 0) { conveyor2 = null; }
        this.conveyor1 = conveyor1 || new Conveyor1();
        this.conveyor2 = conveyor2 || new Conveyor2();
    }
    ConveyorFacade.prototype.assembleCar = function () {
        var car = "";
        car += this.conveyor1.setBody();
        car += this.conveyor2.setWheels();
        car += this.conveyor1.setEngine();
        car += this.conveyor2.setInterior();
        return car;
    };
    return ConveyorFacade;
}());
var Conveyor1 = /** @class */ (function () {
    function Conveyor1() {
    }
    Conveyor1.prototype.setBody = function () {
        return "Body set ";
    };
    Conveyor1.prototype.setEngine = function () {
        return "Engine set ";
    };
    return Conveyor1;
}());
var Conveyor2 = /** @class */ (function () {
    function Conveyor2() {
    }
    Conveyor2.prototype.setWheels = function () {
        return "Wheels set ";
    };
    Conveyor2.prototype.setInterior = function () {
        return "Interior set";
    };
    return Conveyor2;
}());
var subsystem1 = new Conveyor1();
var subsystem2 = new Conveyor2();
var facade = new ConveyorFacade(subsystem1, subsystem2);
console.log(facade.assembleCar());
