var Memento = /** @class */ (function () {
    function Memento(value) {
        this.value = value;
    }
    return Memento;
}());
// const creator = {
//     save : val => new Memento(val),
//     restore : memento => memento.value,
// }
var Originator = /** @class */ (function () {
    function Originator() {
    }
    Originator.prototype.save = function (val) {
        return new Memento(val);
    };
    Originator.prototype.restore = function (memento) {
        return memento.value;
    };
    return Originator;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.values = [];
    }
    Caretaker.prototype.addMemento = function (memento) {
        this.values.push(memento);
    };
    Caretaker.prototype.getMemento = function (index) {
        return this.values[index];
    };
    return Caretaker;
}());
var careTaker = new Caretaker();
var creator = new Originator();
careTaker.addMemento(creator.save("hello"));
careTaker.addMemento(creator.save("hello world"));
careTaker.addMemento(creator.save("hello world!!!"));
console.log(creator.restore(careTaker.getMemento(1)));
