class BmwFactory{
    create(type){
        if(type === "x5"){
            return new Bmw(type,108000,300);
        }
        if(type === "x6"){
            return new Bmw(type,111000, 320);
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



const factory = new BmwFactory();

const x5 = factory.create("x5");
console.log(x5.show());
const x6 = factory.create("x6");
console.log(x6.show());
