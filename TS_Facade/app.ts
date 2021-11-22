class ConveyorFacade{
    protected conveyor1 : Conveyor1;
    protected conveyor2 : Conveyor2;
    constructor(conveyor1 : Conveyor1 = null, conveyor2 : Conveyor2 = null){
        this.conveyor1 = conveyor1 || new Conveyor1();
        this.conveyor2 = conveyor2 || new Conveyor2();
    }


    assembleCar(): string{
        let car = "";
        car += this.conveyor1.setBody();
        car += this.conveyor2.setWheels();
        car += this.conveyor1.setEngine();
        car += this.conveyor2.setInterior();
        return car;
    }
}


class Conveyor1{
    setBody(): string{
        return "Body set ";
    }
    setEngine() : string{
        return "Engine set ";
    }
}

class Conveyor2{
    setWheels(): string{
        return "Wheels set ";
    }
    setInterior() : string{
        return "Interior set";
    }
}

const subsystem1 = new Conveyor1();
const subsystem2 = new Conveyor2();
const facade = new ConveyorFacade(subsystem1, subsystem2);

console.log(facade.assembleCar());