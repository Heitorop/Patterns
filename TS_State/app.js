var Order = /** @class */ (function () {
    function Order() {
        this.state = new WaitingForPayment();
    }
    Order.prototype.nextState = function () {
        this.state = this.state.next();
    };
    return Order;
}());
var WaitingForPayment = /** @class */ (function () {
    function WaitingForPayment() {
        this.name = "waitingForPaument";
        this.nextStatus = Shipping;
    }
    WaitingForPayment.prototype.next = function () {
        return new this.nextStatus();
    };
    return WaitingForPayment;
}());
var Shipping = /** @class */ (function () {
    function Shipping() {
        this.name = "shipping";
        this.nextStatus = Delivered;
    }
    Shipping.prototype.next = function () {
        return new this.nextStatus();
    };
    return Shipping;
}());
var Delivered = /** @class */ (function () {
    function Delivered() {
        this.name = "delivered";
        this.nextStatus = Delivered;
    }
    Delivered.prototype.next = function () {
        return new this.nextStatus();
    };
    return Delivered;
}());
var order = new Order();
console.log(order.state.name);
order.nextState();
console.log(order.state.name);
order.nextState();
console.log(order.state.name);
