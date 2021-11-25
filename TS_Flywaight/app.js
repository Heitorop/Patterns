var AutoContext = /** @class */ (function () {
    function AutoContext(model, color) {
        this.model = model;
        this.color = color;
    }
    AutoContext.prototype.show = function () {
        console.log(this.model.getModel(), this.color);
    };
    return AutoContext;
}());
var Auto = /** @class */ (function () {
    function Auto(model) {
        this.model = model;
    }
    Auto.prototype.getModel = function () {
        return this.model;
    };
    return Auto;
}());
var AutoFactory = /** @class */ (function () {
    function AutoFactory() {
        this.models = [];
    }
    AutoFactory.prototype.create = function (name) {
        var model = this.models[name];
        if (model)
            return model;
        console.count("model");
        this.models[name] = new Auto(name);
        return this.models[name];
    };
    AutoFactory.prototype.getModels = function () {
        console.table(this.models);
    };
    return AutoFactory;
}());
var factory = new AutoFactory();
var bmw = new AutoContext(factory.create("BMW"), "black");
bmw.show();
var bmwWhite = new AutoContext(factory.create("BMW"), "White");
bmwWhite.show();
var audi = new AutoContext(factory.create("Audi"), "black");
audi.show();
var audiSilver = new AutoContext(factory.create("Audi"), "silver");
audiSilver.show();
// const tesla = factory.create("Tesla");
// const blackTesla = factory.create("Tesla");
console.log(factory.getModels());
