/**
 * Интерфейс Абстрактной Фабрики объявляет набор методов, которые возвращают
 * различные абстрактные продукты. Эти продукты называются семейством и связаны
 * темой или концепцией высокого уровня. Продукты одного семейства обычно могут
 * взаимодействовать между собой. Семейство продуктов может иметь несколько
 * вариаций, но продукты одной вариации несовместимы с продуктами другой.
 */
 interface AbstractFactory {
    SpawnPhysCreeps(): CreepPhysDam;

    SpawnMagCreeps(): Magicians;
}

/**
 * Конкретная Фабрика производит семейство продуктов одной вариации. Фабрика
 * гарантирует совместимость полученных продуктов. Обратите внимание, что
 * сигнатуры методов Конкретной Фабрики возвращают абстрактный продукт, в то
 * время как внутри метода создается экземпляр конкретного продукта.
 */
class Baracks implements AbstractFactory {
    public SpawnPhysCreeps(): CreepPhysDam {
        return new Swordsman();
    }

    public SpawnMagCreeps(): Magicians {
        return new Magician();
    }
}

/**
 * Каждая Конкретная Фабрика имеет соответствующую вариацию продукта.
 */
class Forest implements AbstractFactory {
    public SpawnPhysCreeps(): CreepPhysDam {
        return new ForestPhysCreep();
    }

    public SpawnMagCreeps(): Magicians {
        return new ForestMagician();
    }
}

/**
 * Каждый отдельный продукт семейства продуктов должен иметь базовый интерфейс.
 * Все вариации продукта должны реализовывать этот интерфейс.
 */
interface CreepPhysDam {
    health_points : number;
    damage : number;
    spawning(): string;
    characteristic() : string;
}

/**
 * Эти Конкретные Продукты создаются соответствующими Конкретными Фабриками.
 */
class Swordsman implements CreepPhysDam {
    health_points : number = 50;
    damage : number = 20;
    public spawning(): string {
        return "Swordsman have spawned\n";
    }

    public characteristic(): string {
        return `HP = ${this.health_points}      Damage = ${this.damage}`;
    }
}

class ForestPhysCreep implements CreepPhysDam {
    health_points : number = 100;
    damage : number = 40;
    public spawning(): string {
        return "ForestPhys have spawned\n";
    }

    public characteristic(): string {
        return `HP = ${this.health_points}      Damage = ${this.damage}`;
    }
}

/**
 * Базовый интерфейс другого продукта. Все продукты могут взаимодействовать друг
 * с другом, но правильное взаимодействие возможно только между продуктами одной
 * и той же конкретной вариации.
 */
interface Magicians {
    health_points : number;
    damage : number;
    mana : number;
    spawning(): string;
    characteristic() : string;
}

/**
 * Эти Конкретные Продукты создаются соответствующими Конкретными Фабриками.
 */
class Magician implements Magician {
    health_points : number = 30;
    damage : number = 45;
    mana : number = 500;
    public spawning(): string {
        return 'Magician have spawned\n';
    }

    public characteristic(): string {
        return `HP = ${this.health_points}      Mana = ${this.mana}     Damage = ${this.damage}`;
    }
}

class ForestMagician implements Magician {
    health_points : number = 100;
    damage : number = 80;
    mana : number = 800;
    public spawning(): string {
        return 'ForestMagician have spawned\n';
    }

    public characteristic(): string {
        return `HP = ${this.health_points}      Mana = ${this.mana}     Damage = ${this.damage}`;
    }
}

/**
 * Клиентский код работает с фабриками и продуктами только через абстрактные
 * типы: Абстрактная Фабрика и Абстрактный Продукт. Это позволяет передавать
 * любой подкласс фабрики или продукта клиентскому коду, не нарушая его.
 */
function clientCode(factory: AbstractFactory) {
    const productA = factory.SpawnPhysCreeps();
    const productB = factory.SpawnMagCreeps();

    console.log(productA.spawning(),productA.characteristic());
    console.log(productB.spawning(),productB.characteristic());
}

/**
 * Клиентский код может работать с любым конкретным классом фабрики.
 */
clientCode(new Baracks());

clientCode(new Forest());

