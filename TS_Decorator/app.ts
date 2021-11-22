interface Car {
    getPrice() : number;
    getDescription(): string;
}

class PimpMyRide implements Car{
    protected car : Car;

    constructor(car: Car){
        this.car = car;
    }

    getPrice() : number{
        return this.car.getPrice();
    }

    getDescription() : string{
        return this.car.getDescription();
    }

}


class Autopilot extends PimpMyRide{
    getPrice() : number{
        return this.car.getPrice() +  5000;
    }

    getDescription() : string{
        return `${super.getDescription()} with autopilot`;
    }
}

class Parktronic extends PimpMyRide{
    getPrice()  : number{
        return this.car.getPrice() +  3000;
    }

    getDescription() : string{
        return `${super.getDescription()} with parktronic`;
    }
}

class Tesla implements Car{
    price : number;
    model : string;
    constructor(){
        this.price = 25000;
        this.model = "Tesla";
    }

    getPrice()  : number{
        return this.price;
    }

    getDescription() : string{
        return this.model;
    }
}

let tesla = new Tesla();
console.log(tesla.getDescription());
const decorator1 = new Autopilot(tesla);
console.log(decorator1.getDescription());
const decorator2 = new Parktronic(decorator1);
console.log(decorator2.getDescription());


