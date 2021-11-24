 interface Equipment{
    price : number;
    name : string;
    getPrice() : number;
    getName() : string;
    setName(name : string) : void;
    setPrice(price : number) : void;
} 



class Engine implements Equipment{
    price : number;
    name : string;
    constructor(){
        this.setName("Engine");
        this.setPrice(800);
    }

    setName(name : string) : void{
        this.name = name;
    }

    setPrice(price : number) : void{
        this.price = price;
    }

    getPrice() : number{
        return this.price;
    }

    getName() : string{
        return this.name;
    }
}

class Body implements Equipment{
    price : number;
    name : string;
    constructor(){
        this.setName("Body");
        this.setPrice(3000);
    }
    setName(name : string) : void{
        this.name = name;
    }

    setPrice(price : number) : void{
        this.price = price;
    }

    getPrice() : number{
        return this.price;
    }

    getName() : string{
        return this.name;
    }
}

class Tools implements Equipment{
    price : number;
    name : string;
    constructor(){
        this.setName("Tools");
        this.setPrice(4000);
    }
    setName(name : string) : void{
        this.name = name;
    }

    setPrice(price : number) : void{
        this.price = price;
    }

    getPrice() : number{
        return this.price;
    }

    getName() : string{
        return this.name;
    }
}

class Composite implements Equipment{
    price : number;
    name : string;
    equipment : Array<Equipment>;
    constructor(){
        this.equipment = [];
    }
    setName(name : string) : void{
        this.name = name;
    }

    setPrice(price : number) : void{
        this.price = price;
    }

    getName() : string{
        return this.name;
    }

    add(equipment : Equipment) : void{
        this.equipment.push(equipment);
    }

    getPrice() : number{
        return this.equipment.map(equipment => equipment.getPrice())
        .reduce((a:number,b:number) => a+b);
    }
}

class Car extends Composite{
    constructor(){
        super();
        this.setName("BMW");
    }
}

const myCar = new Car();
myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`);