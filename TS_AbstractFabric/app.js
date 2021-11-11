/**
 * Конкретная Фабрика производит семейство продуктов одной вариации. Фабрика
 * гарантирует совместимость полученных продуктов. Обратите внимание, что
 * сигнатуры методов Конкретной Фабрики возвращают абстрактный продукт, в то
 * время как внутри метода создается экземпляр конкретного продукта.
 */
var Baracks = /** @class */ (function () {
    function Baracks() {
    }
    Baracks.prototype.SpawnPhysCreeps = function () {
        return new Swordsman();
    };
    Baracks.prototype.SpawnMagCreeps = function () {
        return new Magician();
    };
    return Baracks;
}());
/**
 * Каждая Конкретная Фабрика имеет соответствующую вариацию продукта.
 */
var Forest = /** @class */ (function () {
    function Forest() {
    }
    Forest.prototype.SpawnPhysCreeps = function () {
        return new ForestPhysCreep();
    };
    Forest.prototype.SpawnMagCreeps = function () {
        return new ForestMagician();
    };
    return Forest;
}());
/**
 * Эти Конкретные Продукты создаются соответствующими Конкретными Фабриками.
 */
var Swordsman = /** @class */ (function () {
    function Swordsman() {
        this.health_points = 50;
        this.damage = 20;
    }
    Swordsman.prototype.spawning = function () {
        return "Swordsman have spawned\n";
    };
    Swordsman.prototype.characteristic = function () {
        return "HP = " + this.health_points + "      Damage = " + this.damage;
    };
    return Swordsman;
}());
var ForestPhysCreep = /** @class */ (function () {
    function ForestPhysCreep() {
        this.health_points = 100;
        this.damage = 40;
    }
    ForestPhysCreep.prototype.spawning = function () {
        return "ForestPhys have spawned\n";
    };
    ForestPhysCreep.prototype.characteristic = function () {
        return "HP = " + this.health_points + "      Damage = " + this.damage;
    };
    return ForestPhysCreep;
}());
/**
 * Эти Конкретные Продукты создаются соответствующими Конкретными Фабриками.
 */
var Magician = /** @class */ (function () {
    function Magician() {
        this.health_points = 30;
        this.damage = 45;
        this.mana = 500;
    }
    Magician.prototype.spawning = function () {
        return 'Magician have spawned\n';
    };
    Magician.prototype.characteristic = function () {
        return "HP = " + this.health_points + "      Mana = " + this.mana + "     Damage = " + this.damage;
    };
    return Magician;
}());
var ForestMagician = /** @class */ (function () {
    function ForestMagician() {
        this.health_points = 100;
        this.damage = 80;
        this.mana = 800;
    }
    ForestMagician.prototype.spawning = function () {
        return 'ForestMagician have spawned\n';
    };
    ForestMagician.prototype.characteristic = function () {
        return "HP = " + this.health_points + "      Mana = " + this.mana + "     Damage = " + this.damage;
    };
    return ForestMagician;
}());
/**
 * Клиентский код работает с фабриками и продуктами только через абстрактные
 * типы: Абстрактная Фабрика и Абстрактный Продукт. Это позволяет передавать
 * любой подкласс фабрики или продукта клиентскому коду, не нарушая его.
 */
function clientCode(factory) {
    var productA = factory.SpawnPhysCreeps();
    var productB = factory.SpawnMagCreeps();
    console.log(productA.spawning(), productA.characteristic());
    console.log(productB.spawning(), productB.characteristic());
}
/**
 * Клиентский код может работать с любым конкретным классом фабрики.
 */
clientCode(new Baracks());
clientCode(new Forest());
console.log(new Swordsman());
