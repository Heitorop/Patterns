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
var Builder = /** @class */ (function () {
    function Builder() {
    }
    Builder.prototype.build = function () {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.CollectAccessories();
    };
    return Builder;
}());
var TeslaBuilder = /** @class */ (function (_super) {
    __extends(TeslaBuilder, _super);
    function TeslaBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeslaBuilder.prototype.addEngine = function () {
        console.log("Tesla engine");
    };
    TeslaBuilder.prototype.installChassis = function () {
        console.log("Tesla chassis");
    };
    TeslaBuilder.prototype.addElectronic = function () {
        console.log("Tesla Electronic");
    };
    TeslaBuilder.prototype.CollectAccessories = function () {
        console.log("Tesla accessories");
    };
    return TeslaBuilder;
}(Builder));
var BmwBuilder = /** @class */ (function (_super) {
    __extends(BmwBuilder, _super);
    function BmwBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BmwBuilder.prototype.addEngine = function () {
        console.log("Bmw engine");
    };
    BmwBuilder.prototype.installChassis = function () {
        console.log("Bmw chassis");
    };
    BmwBuilder.prototype.addElectronic = function () {
        console.log("Bmw Electronic");
    };
    BmwBuilder.prototype.CollectAccessories = function () {
        console.log("Bmw accessories");
    };
    return BmwBuilder;
}(Builder));
var tesla = new TeslaBuilder();
var bmw = new BmwBuilder();
console.log(tesla.build());
console.log(bmw.build());
