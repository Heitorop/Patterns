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
var Equipment = /** @class */ (function () {
    function Equipment() {
    }
    Equipment.prototype.getPrice = function () {
        return this.price || 0;
    };
    Equipment.prototype.getName = function () {
        return this.name;
    };
    Equipment.prototype.setName = function (name) {
        this.name = name;
    };
    Equipment.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Equipment;
}());
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine() {
        var _this = _super.call(this) || this;
        _this.setName("Engine");
        _this.setPrice(800);
        return _this;
    }
    return Engine;
}(Equipment));
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        var _this = _super.call(this) || this;
        _this.setName("Body");
        _this.setPrice(3000);
        return _this;
    }
    return Body;
}(Equipment));
var Tools = /** @class */ (function (_super) {
    __extends(Tools, _super);
    function Tools() {
        var _this = _super.call(this) || this;
        _this.setName("Tools");
        _this.setPrice(4000);
        return _this;
    }
    return Tools;
}(Equipment));
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super.call(this) || this;
        _this.equipment = [];
        return _this;
    }
    Composite.prototype.add = function (equipment) {
        this.equipment.push(equipment);
    };
    Composite.prototype.getPrice = function () {
        return this.equipment.map(function (equipment) { return equipment.getPrice(); })
            .reduce(function (a, b) { return a + b; });
    };
    return Composite;
}(Equipment));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this) || this;
        _this.setName("BMW");
        return _this;
    }
    return Car;
}(Composite));
var myCar = new Car();
myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());
console.log(myCar.getName() + " price is " + myCar.getPrice() + "$");
