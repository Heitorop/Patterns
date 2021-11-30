
interface Strategy{
    setAmount(amount : number) : number
}


class baseStrategy implements Strategy{
    setAmount(amount : number) : number{
        return amount;
    }
}

class premiumStrategy implements Strategy{
    setAmount(amount : number) : number{
        return amount * 0.85;
    }
}

class platinumStrategy implements Strategy{
    setAmount(amount : number) : number{
        return amount * 0.65;
    }
}


class AutoCard{//Context
    discount : Strategy;
    amount : number;


    constructor(discount : Strategy){
        this.discount = discount;
        this.amount = 0;
    }

    check() : number{
        return this.discount.setAmount(this.amount);
    }

    setValue(amount : number) : void{
        this.amount = amount;
    }
}

const baseValue = 50000;
const baseAc = new baseStrategy();
const platinumAc = new platinumStrategy();
const premiumAc = new premiumStrategy();

const baseCustomer = new AutoCard(baseAc);
const platinumCustomer = new AutoCard(platinumAc);
const premiumCustomer = new AutoCard(premiumAc);

baseCustomer.setValue(baseValue);
console.log(baseCustomer.check());

premiumCustomer.setValue(baseValue);
console.log(premiumCustomer.check());

platinumCustomer.setValue(baseValue);
console.log(platinumCustomer.check());