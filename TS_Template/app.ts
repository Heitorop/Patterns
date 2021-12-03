abstract class Builder{
    build() : void{
        this.addEngine();
        this.installChassis()
        this.addElectronic();
        this.collectAccessories();
    }

    protected abstract addEngine() : void;
    protected abstract installChassis() : void;
    protected abstract addElectronic() : void;
    protected abstract collectAccessories() : void;
    
}

class TeslaBuilder extends Builder{
    addEngine() : void{
        console.log("Tesla engine");
    }
    installChassis() : void{
        console.log("Tesla chassis");
    }
    addElectronic() : void{
        console.log("Tesla Electronic");
    }
    collectAccessories() : void{
        console.log("Tesla accessories");
    }
}


class BmwBuilder extends Builder{
    addEngine() : void{
        console.log("Bmw engine");
    }
    installChassis() : void{
        console.log("Bmw chassis");
    }
    addElectronic() : void{
        console.log("Bmw Electronic");
    }
    collectAccessories() : void{
        console.log("Bmw accessories");
    }
}

const tesla = new TeslaBuilder();
const bmw = new BmwBuilder();

console.log(tesla.build());
console.log(bmw.build());