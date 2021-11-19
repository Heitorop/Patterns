var Counter = /** @class */ (function () {
    function Counter() {
        if (typeof Counter.instance === "object") {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }
    Counter.prototype.getCounter = function () {
        return this.count;
    };
    Counter.prototype.increaseCounter = function () {
        return this.count++;
    };
    return Counter;
}());
var myCount1 = new Counter();
var myCount2 = new Counter();
myCount1.increaseCounter();
myCount1.increaseCounter();
myCount2.increaseCounter();
myCount2.increaseCounter();
console.log(myCount1.getCounter());
console.log(myCount2.getCounter());
console.log(myCount2.instance);
