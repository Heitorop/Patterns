interface Mediator{
    customers : Array<string>;
    orderAuto(customer : Customer,auto : string,info : string) : void;
}



class OfficialDealer implements Mediator{
    customers : Array<string>;


    constructor(){
        this.customers = [];
    }

    orderAuto(customer : Customer,auto : string,info : string) : void{
        const name = customer.getName();

        console.log(`Order name : ${name}\nOrdered auto is ${auto}`);
        console.log(`Additional info : ${info}`);
        this.addToCustomerList(name);
    }

    addToCustomerList(name : string) : void{
        this.customers.push(name);
    }

    getCustomerList() : Array<string>{
        return this.customers;
    }
}

class Customer{
    name : string;
    dealerMediator : Mediator;


    constructor(name : string,dealerMediator : OfficialDealer){
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() : string{
        return this.name;
    }

    makeOrder(auto : string,info : string) : void{
        this.dealerMediator.orderAuto(this,auto,info);
    }
}

const mediator = new OfficialDealer();

const arch = new Customer("Arthur",mediator);
const ivan = new Customer("Ivan", mediator);

arch.makeOrder("BMW","with parktronil");
ivan.makeOrder("Tesla","with autopilot");

console.log(mediator.getCustomerList());