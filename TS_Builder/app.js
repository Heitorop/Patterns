var ConcreteBuilder = /** @class */ (function () {
    function ConcreteBuilder() {
        this.reset();
    }
    ConcreteBuilder.prototype.reset = function () {
        this.product = new MyBuild();
    };
    // public purchase(typeOfPurchase:string) : void{
    //     if(typeOfPurchase == "poor"){
    //         this.product.things.push('PartA1');
    //     }
    //     else if(typeOfPurchase == "average"){
    //         this.product.things.push('PartA1');
    //         this.product.things.push('PartB1');
    //     }
    //     else if(typeOfPurchase == "rich"){
    //         this.product.things.push('PartA1');
    //         this.product.things.push('PartB1');
    //         this.product.things.push('PartC1');
    //     }
    // }
    ConcreteBuilder.prototype.poor = function () {
        this.product.things.push('PartA1');
    };
    ConcreteBuilder.prototype.average = function () {
        this.product.things.push('PartB1');
    };
    ConcreteBuilder.prototype.rich = function () {
        this.product.things.push('PartC1');
    };
    ConcreteBuilder.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder;
}());
var MyBuild = /** @class */ (function () {
    function MyBuild() {
        this.things = [];
    }
    MyBuild.prototype.showInventory = function () {
        console.log("My inventory: " + this.things.join(', ') + "\n");
    };
    return MyBuild;
}());
/**
 * Директор отвечает только за выполнение шагов построения в определённой
 * последовательности. Это полезно при производстве продуктов в определённом
 * порядке или особой конфигурации. Строго говоря, класс Директор необязателен,
 * так как клиент может напрямую управлять строителями.
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    /**
     * Директор работает с любым экземпляром строителя, который передаётся ему
     * клиентским кодом. Таким образом, клиентский код может изменить конечный
     * тип вновь собираемого продукта.
     */
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    /**
     * Директор может строить несколько вариаций продукта, используя одинаковые
     * шаги построения.
     */
    Director.prototype.poorBuild = function () {
        this.builder.poor();
    };
    Director.prototype.averageBuild = function () {
        this.builder.poor();
        this.builder.average();
    };
    Director.prototype.richBuild = function () {
        this.builder.poor();
        this.builder.average();
        this.builder.rich();
    };
    return Director;
}());
function clientCode(director) {
    var builder = new ConcreteBuilder();
    director.setBuilder(builder);
    console.log('Poor build:');
    director.poorBuild();
    builder.getProduct().showInventory();
    console.log('Average build:');
    director.averageBuild();
    builder.getProduct().showInventory();
    console.log('Rich build:');
    director.richBuild();
    builder.getProduct().showInventory();
    // Помните, что паттерн Строитель можно использовать без класса Директор.
    console.log('Custom build:');
    builder.poor();
    builder.rich();
    builder.getProduct().showInventory();
}
var director = new Director();
clientCode(director);
