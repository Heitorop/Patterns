var baseStrategy = /** @class */ (function () {
    function baseStrategy() {
    }
    baseStrategy.prototype.setAmount = function (amount) {
        return amount;
    };
    return baseStrategy;
}());
var premiumStrategy = /** @class */ (function () {
    function premiumStrategy() {
    }
    premiumStrategy.prototype.setAmount = function (amount) {
        return amount * 0.85;
    };
    return premiumStrategy;
}());
var platinumStrategy = /** @class */ (function () {
    function platinumStrategy() {
    }
    platinumStrategy.prototype.setAmount = function (amount) {
        return amount * 0.65;
    };
    return platinumStrategy;
}());
var AutoCard = /** @class */ (function () {
    function AutoCard(discount) {
        this.discount = discount;
        this.amount = 0;
    }
    AutoCard.prototype.check = function () {
        return this.discount.setAmount(this.amount);
    };
    AutoCard.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    return AutoCard;
}());
var baseValue = 50000;
var baseAc = new baseStrategy();
var platinumAc = new platinumStrategy();
var premiumAc = new premiumStrategy();
var baseCustomer = new AutoCard(baseAc);
var platinumCustomer = new AutoCard(platinumAc);
var premiumCustomer = new AutoCard(premiumAc);
baseCustomer.setAmount(baseValue);
console.log(baseCustomer.check());
premiumCustomer.setAmount(baseValue);
console.log(premiumCustomer.check());
platinumCustomer.setAmount(baseValue);
console.log(platinumCustomer.check());
