interface Acces{
    open(string) : void;
    close() : void;
}



class SecuritySys implements Acces{
    door : DoorOfCar;
    constructor(door : DoorOfCar){
        this.door = door;
    }

    open(password : string) : void{
        if(this.authentificate(password)){
            this.door.open();
        }else{
            console.log("Acces denied");
        }
    }


    authentificate(password : string) : boolean{
        return password === "Ilon";
    }

    close() : void{
        this.door.close();
    }
}


class DoorOfCar implements Acces{
    open() : void{
        console.log("Door is opened");
    }

    close() : void{
        console.log("Door is closed");
    }
}

const door = new SecuritySys(new DoorOfCar());
door.open("Arthur");
door.open("Ilon");
door.close();