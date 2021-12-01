class Driver{
    command : Command;

    constructor(command){
        this.command = command;
    }

    execute() : void{
        this.command.execute();
    } 
}

class Engine{
    state : boolean;

    constructor(){
        this.state = false;
    }

    on():void{
        this.state = true;
    }

    off():void{
        this.state = false;
    }
}

interface Command{
    engine : Engine;
    execute() : void;
}

class OnStartCommand implements Command{
    engine : Engine;

    constructor(engine : Engine){
        this.engine = engine;
    }

    execute() : void{
        this.engine.on();
    } 
}

class OnSwitchOffCommand implements Command{
    engine : Engine;

    constructor(engine : Engine){
        this.engine = engine;
    }

    execute() : void{
        this.engine.off();
    } 
}

const engine = new Engine();
console.log(engine);

const onStartCommand = new OnStartCommand(engine);
const driver = new Driver(onStartCommand);
driver.execute();

console.log(engine);
