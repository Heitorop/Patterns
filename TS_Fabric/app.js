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
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.spawn = function () {
        var typeOfCreep = this.factoryMethod();
        return typeOfCreep.spawning() + " have spawned";
    };
    return Creator;
}());
var Baracks = /** @class */ (function (_super) {
    __extends(Baracks, _super);
    function Baracks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Baracks.prototype.factoryMethod = function () {
        return new SwordsmenMagician();
    };
    Baracks.prototype.spawn = function () {
        var typeOfCreep = this.factoryMethod();
        return typeOfCreep.spawning() + " have spawned";
    };
    return Baracks;
}(Creator));
var SwordsmenMagician = /** @class */ (function () {
    function SwordsmenMagician() {
    }
    SwordsmenMagician.prototype.spawning = function () {
        return 'Swordsmen and Magicians';
    };
    return SwordsmenMagician;
}());
function Dota2(creator) {
    console.log(creator.spawn());
}
Dota2(new Baracks());
