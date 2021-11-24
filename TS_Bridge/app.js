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
var Model = /** @class */ (function () {
    function Model(color) {
        this.color = color;
    }
    return Model;
}());
var Color = /** @class */ (function () {
    function Color(type) {
        this.type = type;
    }
    Color.prototype.getColor = function () {
        return this.type;
    };
    return Color;
}());
var BlackColor = /** @class */ (function (_super) {
    __extends(BlackColor, _super);
    function BlackColor() {
        return _super.call(this, "dark-black") || this;
    }
    return BlackColor;
}(Color));
var SilverColor = /** @class */ (function (_super) {
    __extends(SilverColor, _super);
    function SilverColor() {
        return _super.call(this, "silvermetalic") || this;
    }
    return SilverColor;
}(Color));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(color) {
        return _super.call(this, color) || this;
    }
    Audi.prototype.paint = function () {
        return "Audi,Bmw Color : " + this.color.getColor();
    };
    return Audi;
}(Model));
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(color) {
        return _super.call(this, color) || this;
    }
    Bmw.prototype.paint = function () {
        return "Audi,Bmw Color : " + this.color.getColor();
    };
    return Bmw;
}(Model));
var blackBmw = new Bmw(new BlackColor());
console.log(blackBmw.paint());
