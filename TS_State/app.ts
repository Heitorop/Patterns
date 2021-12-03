class Order {
    state : OrderStatus;
    constructor(){
        this.state = new WaitingForPayment();
    }

    nextState() : void{
        this.state = this.state.next();
    }
}


interface OrderStatus{
    name : string;
    nextStatus : OrderStatus;
    next() : OrderStatus;
}

class  WaitingForPayment implements OrderStatus{
    name : string;
    nextStatus : any;
    constructor(){
        this.name = "waitingForPaument";
        this.nextStatus = Shipping;
    }

    next() : OrderStatus{
        return new this.nextStatus();
    }
}


class  Shipping implements OrderStatus{
    name : string;
    nextStatus : any;
    constructor(){
        this.name = "shipping";
        this.nextStatus = Delivered;
    }

    next() : OrderStatus{
        return new this.nextStatus();
    }
}


class  Delivered implements OrderStatus{
    name : string;
    nextStatus : any;
    constructor(){
        this.name = "delivered";
        this.nextStatus = Delivered;
    }

    next() : OrderStatus{
        return new this.nextStatus();
    }
}

const order = new Order();

console.log(order.state.name);

order.nextState();
console.log(order.state.name);

order.nextState();
console.log(order.state.name);




