
 interface Builder {
    // purchase(a : string): void;
    poor(): void;
    average(): void;
    rich(): void;
}

class ConcreteBuilder implements Builder {
    private product: MyBuild;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new MyBuild();
    }

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

    public poor(): void {
        this.product.things.push('PartA1');
    }

    public average(): void {
        this.product.things.push('PartB1');
    }

    public rich(): void {
        this.product.things.push('PartC1');
    }

    public getProduct(): MyBuild {
        const result = this.product;
        this.reset();
        return result;
    }
}

class MyBuild {
    public things: string[] = [];

    public showInventory(): void {
        console.log(`My inventory: ${this.things.join(', ')}\n`);
    }
}

/**
 * Директор отвечает только за выполнение шагов построения в определённой
 * последовательности. Это полезно при производстве продуктов в определённом
 * порядке или особой конфигурации. Строго говоря, класс Директор необязателен,
 * так как клиент может напрямую управлять строителями.
 */
class Director {
    private builder: Builder;

    /**
     * Директор работает с любым экземпляром строителя, который передаётся ему
     * клиентским кодом. Таким образом, клиентский код может изменить конечный
     * тип вновь собираемого продукта.
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * Директор может строить несколько вариаций продукта, используя одинаковые
     * шаги построения.
     */
    public poorBuild(): void {
        this.builder.poor();
    }
    
    public averageBuild() : void{
        this.builder.poor();
        this.builder.average();
    }

    public richBuild(): void {
        this.builder.poor();
        this.builder.average();
        this.builder.rich();
    }
}

function clientCode(director: Director) {
    const builder = new ConcreteBuilder();
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

const director = new Director();
clientCode(director);