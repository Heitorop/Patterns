var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        this.items = [];
    }
    WordsCollection.prototype.getItems = function () {
        return this.items;
    };
    WordsCollection.prototype.getCount = function () {
        return this.items.length;
    };
    WordsCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WordsCollection.prototype.getIterator = function () {
        return new Iteratorr(this);
    };
    return WordsCollection;
}());
var Iteratorr = /** @class */ (function () {
    function Iteratorr(collection) {
        this.index = 0;
        this.elements = collection;
    }
    Iteratorr.prototype.next = function () {
        var item = this.elements.getItems()[this.index++];
        return item;
    };
    Iteratorr.prototype.valid = function () {
        return this.index < this.elements.getCount();
    };
    return Iteratorr;
}());
// const collection = new Iteratorr(["Audi","Bmw","Tesla","Mersedes"]);
var collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');
var iterator = collection.getIterator();
while (iterator.valid()) {
    console.log(iterator.next());
}
