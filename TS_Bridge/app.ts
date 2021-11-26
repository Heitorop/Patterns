interface Model{//реализация
    color:Color;
    paint() : string;
}

class Color{//абстракция 
    type:string;

    constructor(type : string){
        this.type = type;
    }

    getColor() : string{
        return this.type;
    }
}

class BlackColor extends Color{
    constructor(){
        super("dark-black");
    }
}

class SilverColor extends Color{
    constructor(){
        super("silvermetalic");
    }
}

class Audi implements Model{
    color : Color;
    constructor(color : Color){
        this.color = color;
    }

    paint() : string{
        return `Audi,Bmw Color : ${this.color.getColor()}`;
    }
}

class Bmw implements Model{
    color : Color;
    constructor(color : Color){
        this.color = color;
    }

    paint() : string{
        return `Audi,Bmw Color : ${this.color.getColor()}`;
    }
}

const blackBmw = new Bmw(new BlackColor());
console.log(blackBmw.paint());


//////////перевернуть агреггацию 
