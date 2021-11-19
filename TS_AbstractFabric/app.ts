
class BmwProducer {
    delegation(type : string){
        return type === "sport" ? new BmwSportFactory(): new BmwUsFactory();
    }
}



class BmwSportFactory{
    create(model){
        if(model === "m4"){
            return new Bmw(model,200000,350);
        }
        if(model === "m3"){
            return new Bmw(model,180000, 300);
        }
    }
}


class BmwUsFactory{
    create(model){
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



const producer = new BmwProducer();


const sportCar =  producer.delegation("sport");
const m4 = sportCar.create("m4");
console.log(m4.show());

const usCar = producer.delegation("city");
const x6 =  usCar.create("x6");
console.log(x6.show());

