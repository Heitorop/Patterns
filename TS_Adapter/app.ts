


class Eng2{
    simpleInterface() : void{
        console.log("Engine 2.0 - works");
    }
}

class EngV8{
    complecatedInterface() : void{
        console.log("Engine V8 - works");
    }
}

interface Adapter{
    engine :EngV8;
    simpleInterface() : void;
}


class EngineAdapterV8 implements Adapter{
    engine : EngV8;

    constructor(engine : EngV8){
        this.engine = engine;
    }

    simpleInterface() : void{
        this.engine.complecatedInterface();
    }
}

class Car{
    startEngine(engine : Eng2 | EngineAdapterV8){
            engine.simpleInterface();
        }
}


const myCar = new Car();
const oldEng = new Eng2();

myCar.startEngine(oldEng);

const newCar = new Car();
const engineAdapter = new EngineAdapterV8(new EngV8());

newCar.startEngine(engineAdapter);

// const nCar = new Car();
// const egineAdapter = new EngV8();
// nCar.startEngine(engineAdapter);