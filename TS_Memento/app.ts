


class Memento {
    value : string;

    constructor(value){
        this.value = value;
    }
}

// const creator = {
//     save : val => new Memento(val),
//     restore : memento => memento.value,
// }

class Originator{
    save(val : string) : Memento{
        return new Memento(val);
    }

    restore(memento : Memento) : string{
        return memento.value;
    }
}


class Caretaker{
    values : Array<Memento>;

    constructor(){
        this.values = [];
    }

    addMemento(memento : Memento) : void{
        this.values.push(memento);
    }

    getMemento(index : number) : Memento{
        return this.values[index];
    }
}

const careTaker = new Caretaker();
const creator = new Originator();

careTaker.addMemento(creator.save("hello"));
careTaker.addMemento(creator.save("hello world"));
careTaker.addMemento(creator.save("hello world!!!"));

console.log(creator.restore(careTaker.getMemento(1)));

