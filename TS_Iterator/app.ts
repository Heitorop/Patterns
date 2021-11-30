
interface Iter{
    index : number;
    elements : WordsCollection;
    next() : string;
    valid() : boolean;
}

interface Aggregator {
    getIterator(items): Iteratorr;
}


class WordsCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iteratorr {
        return new Iteratorr(this);
    }

}


class Iteratorr implements Iter{
    index : number;
    elements : WordsCollection;

    constructor(collection : WordsCollection){
        this.index = 0;
        this.elements = collection;
    }

    next() : string{
        const item = this.elements.getItems()[this.index++];
        return item;
    }

    valid(): boolean {
        return this.index < this.elements.getCount();
    }
}

// const collection = new Iteratorr(["Audi","Bmw","Tesla","Mersedes"]);
const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');
const iterator = collection.getIterator();


while(iterator.valid()){
    console.log(iterator.next());
}