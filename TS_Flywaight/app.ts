class AutoContext{
    model : Auto;
    color: string;

    constructor(model : Auto,color: string){
        this.model = model;
        this.color = color;
    }

    show() : void{
        console.log(this.model.getModel(),this.color);
    }
}




class Auto {
    model : string;

    constructor(model : string){
        this.model = model;
    }

    getModel():string{
        return this.model;
    }
}


class AutoFactory{
    models : Array<Auto>;

    constructor(){
        this.models = [];
    }

    create(name : string) : Auto{
        let model = this.models[name];
        if(model) return model;
        console.count("model");
        this.models[name] = new Auto(name);
        return this.models[name];
    }

    getModels() : void{
        console.table(this.models);
    }
}


const factory = new AutoFactory();
const bmw = new AutoContext(factory.create("BMW"),"black");
bmw.show();
const bmwWhite = new AutoContext(factory.create("BMW"),"White");
bmwWhite.show();
const audi = new AutoContext(factory.create("Audi"),"black");
audi.show();
const audiSilver = new AutoContext(factory.create("Audi"),"silver");
audiSilver.show();
// const tesla = factory.create("Tesla");
// const blackTesla = factory.create("Tesla");

console.log(factory.getModels());


