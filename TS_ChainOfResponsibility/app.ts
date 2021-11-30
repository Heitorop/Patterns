interface Handler{
    setNext(account : Account) : void;
}


class Account implements Handler{
    name : string;
    balance : number;
    incomer : Account;

    pay(orderPrice : number) : void{
        if(this.canPay(orderPrice)){
            console.log(`Paid ${orderPrice} using ${this.name}`);
        }else if(this.incomer){
            console.log(`Cannot pay using ${this.name}`);
            this.incomer.pay(orderPrice);
        }else{
            console.log("Unfortunately , not enough money");
        }
    }

    canPay(amount : number) : boolean{
        return this.balance >= amount;
    }

    setNext(account : Account) : void{
        this.incomer = account;
    }
}





class Master extends Account{

    constructor(balance : number){
        super();
        this.name = "Master Card";
        this.balance = balance
    }
}

class Paypal extends Account{

    constructor(balance : number){
        super();
        this.name = "Paypal";
        this.balance = balance
    }
}

class Qiwi extends Account{

    constructor(balance : number){
        super();
        this.name = "Qiwi";
        this.balance = balance
    }
}


const masterCard = new Master(100);
const payPal = new Paypal(200);
const qiwi = new Qiwi(500);


masterCard.setNext(payPal);
payPal.setNext(qiwi);

masterCard.pay(501);
