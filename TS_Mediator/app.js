var OfficialDealer = /** @class */ (function () {
    function OfficialDealer() {
        this.customers = [];
    }
    OfficialDealer.prototype.orderAuto = function (customer, auto, info) {
        var name = customer.getName();
        console.log("Order name : " + name + "\nOrdered auto is " + auto);
        console.log("Additional info : " + info);
        this.addToCustomerList(name);
    };
    OfficialDealer.prototype.addToCustomerList = function (name) {
        this.customers.push(name);
    };
    OfficialDealer.prototype.getCustomerList = function () {
        return this.customers;
    };
    return OfficialDealer;
}());
var Customer = /** @class */ (function () {
    function Customer(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.makeOrder = function (auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    };
    return Customer;
}());
var mediator = new OfficialDealer();
var arch = new Customer("Arthur", mediator);
var ivan = new Customer("Ivan", mediator);
arch.makeOrder("BMW", "with parktronil");
ivan.makeOrder("Tesla", "with autopilot");
console.log(mediator.getCustomerList());
