abstract class Creator {
    
    public abstract factoryMethod(): TypeOfCreep;

    public spawn(): string {
        const typeOfCreep = this.factoryMethod();
        return `${typeOfCreep.spawning()} have spawned`;
    }
}

class Baracks extends Creator {
    
    public  factoryMethod(): TypeOfCreep{
        return new SwordsmenMagician();
    }

    public spawn(): string {
        const typeOfCreep = this.factoryMethod();
        return `${typeOfCreep.spawning()} have spawned`;
    }
}

interface TypeOfCreep {
    spawning(): string;
}


class SwordsmenMagician implements TypeOfCreep {
    public spawning(): string {
        return 'Swordsmen and Magicians';
    }
}





function Dota2(creator: Creator) {
    console.log(creator.spawn());
}

Dota2(new Baracks());

