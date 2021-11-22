var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PimpMyRide = /** @class */ (function () {
    function PimpMyRide(car) {
        this.car = car;
    }
    PimpMyRide.prototype.getPrice = function () {
        return this.car.getPrice();
    };
    PimpMyRide.prototype.getDescription = function () {
        return this.car.getDescription();
    };
    return PimpMyRide;
}());
var Autopilot = /** @class */ (function (_super) {
    __extends(Autopilot, _super);
    function Autopilot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Autopilot.prototype.getPrice = function () {
        return this.car.getPrice() + 5000;
    };
    Autopilot.prototype.getDescription = function () {
        return _super.prototype.getDescription.call(this) + " with autopilot";
    };
    return Autopilot;
}(PimpMyRide));
var Parktronic = /** @class */ (function (_super) {
    __extends(Parktronic, _super);
    function Parktronic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parktronic.prototype.getPrice = function () {
        return this.car.getPrice() + 3000;
    };
    Parktronic.prototype.getDescription = function () {
        return _super.prototype.getDescription.call(this) + " with parktronic";
    };
    return Parktronic;
}(PimpMyRide));
var Tesla = /** @class */ (function () {
    function Tesla() {
        this.price = 25000;
        this.model = "Tesla";
    }
    Tesla.prototype.getPrice = function () {
        return this.price;
    };
    Tesla.prototype.getDescription = function () {
        return this.model;
    };
    return Tesla;
}());
var tesla = new Tesla();
console.log(tesla.getDescription());
var decorator1 = new Autopilot(tesla);
console.log(decorator1.getDescription());
var decorator2 = new Parktronic(decorator1);
console.log(decorator2.getDescription());
