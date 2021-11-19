class Tesla {
    model : string;
    price : number;
    interior : string;
    autopilot : boolean;
    constructor(model : string,price : number, interior : string, autopilot : boolean){
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() : Tesla{
        return new Tesla(this.model,this.price,this.interior,this.autopilot);
    }
}

const prototypeCar = new Tesla("S",80000,"black",false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();
const car4 = prototypeCar.produce();

car1.interior = "white";
car1.autopilot = true;

console.log(car1);
console.log(car2);
