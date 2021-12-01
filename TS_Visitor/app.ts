
interface Auto{
    info() : string;
    accept(visitor) : void;
}


class Tesla implements Auto{
    info() : string{
        return "Tesla"
    }

    accept(visitor : Visitor) : void{
        visitor.exp(this);
    }
}

class Bmw implements Auto{
    info() : string{
        return "Bmw"
    }

    accept(visitor : Visitor) : void{
        visitor.exp(this);
    }
}

class Audi implements Auto{
    info() : string{
        return "Audi"
    }

    accept(visitor : Visitor) : void{
        visitor.exp(this);
    }
}

interface Visitor{
    exp(auto : Auto) : void;
}

class Visit implements Visitor{
    exp(auto : Auto) : void{
        if(auto instanceof Tesla){
            console.log(`Exported data : ${auto.info()} ||||Hi I'm visitor for Tesla`);
        }
        if(auto instanceof Bmw){
            console.log(`Exported data : ${auto.info()} ||||Hi I'm visitor for Bmw`);
        }
        if(auto instanceof Audi){
            console.log(`Exported data : ${auto.info()} ||||Hi I'm visitor for Audi`);
        }
    }
}

const tesla = new Tesla();
const bmw = new Bmw();
const visitor = new Visit();
console.log(tesla.info());
console.log(tesla.accept(visitor));
