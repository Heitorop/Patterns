var Tesla = /** @class */ (function () {
    function Tesla() {
    }
    Tesla.prototype.info = function () {
        return "Tesla";
    };
    Tesla.prototype.accept = function (visitor) {
        visitor.exp(this);
    };
    return Tesla;
}());
var Bmw = /** @class */ (function () {
    function Bmw() {
    }
    Bmw.prototype.info = function () {
        return "Bmw";
    };
    Bmw.prototype.accept = function (visitor) {
        visitor.exp(this);
    };
    return Bmw;
}());
var Audi = /** @class */ (function () {
    function Audi() {
    }
    Audi.prototype.info = function () {
        return "Audi";
    };
    Audi.prototype.accept = function (visitor) {
        visitor.exp(this);
    };
    return Audi;
}());
var Visit = /** @class */ (function () {
    function Visit() {
    }
    Visit.prototype.exp = function (auto) {
        if (auto instanceof Tesla) {
            console.log("Exported data : " + auto.info() + " ||||Hi I'm visitor for Tesla");
        }
        if (auto instanceof Bmw) {
            console.log("Exported data : " + auto.info() + " ||||Hi I'm visitor for Bmw");
        }
        if (auto instanceof Audi) {
            console.log("Exported data : " + auto.info() + " ||||Hi I'm visitor for Audi");
        }
    };
    return Visit;
}());
var tesla = new Tesla();
var bmw = new Bmw();
var visitor = new Visit();
console.log(tesla.info());
console.log(tesla.accept(visitor));
