
interface  BmwProducer {
    createSport() : Bmw;
    createUsCar() : Bmw;

}

class BmwFactory{
    createSport(model) : Bmw{
        if(model === "m4"){
            return new Bmw(model,200000,350);
        }
        if(model === "m3"){
            return new Bmw(model,180000, 300);
        }
    }

    createUsCar(model) : Bmw{
        if(model === "x5"){
            return new Bmw(model,108000,180);
        }
        if(model === "x6"){
            return new Bmw(model,111000, 200);
        }
    }
}


class Bmw {
    model : string;
    price : number;
    maxSpeed : number;

    constructor(model : string,price : number ,maxSpeed : number){
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed; 
    }

    show() : string{
        return `${this.model} - ${this.price} - ${this.maxSpeed} `;
    }
}



const producer = new BmwFactory();

const sportCar =  producer.createSport("m4");
console.log(sportCar.show());

const usCar = producer.createUsCar("x6");
console.log(usCar.show());

