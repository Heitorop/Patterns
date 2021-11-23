var SecuritySys = /** @class */ (function () {
    function SecuritySys(door) {
        this.door = door;
    }
    SecuritySys.prototype.open = function (password) {
        if (this.authentificate(password)) {
            this.door.open();
        }
        else {
            console.log("Acces denied");
        }
    };
    SecuritySys.prototype.authentificate = function (password) {
        return password === "Ilon";
    };
    SecuritySys.prototype.close = function () {
        this.door.close();
    };
    return SecuritySys;
}());
var DoorOfCar = /** @class */ (function () {
    function DoorOfCar() {
    }
    DoorOfCar.prototype.open = function () {
        console.log("Door is opened");
    };
    DoorOfCar.prototype.close = function () {
        console.log("Door is closed");
    };
    return DoorOfCar;
}());
var door = new SecuritySys(new DoorOfCar());
door.open("Arthur");
door.open("Ilon");
door.close();
