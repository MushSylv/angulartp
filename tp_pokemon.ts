export class Pokemon {
    nom:string;
    hp: number;
    speed: number;
    level: number;
    power: number;
    offA: number;
    defS:number;

    constructor(_nom, _hp, _speed,_level,_power,_offA,_defS) {
        this.nom=_nom;
        this.hp=_hp;
        this.speed = _speed;
        this.level = _level;
        this.power = _power;
        this.offA = _offA;
        this.defS = _defS;
        console.log(this.nom , this.speed, this.level, this.power, this.offA, this.defS);
    }

}
export function attackFirst(p1 : Pokemon, p2 : Pokemon): Pokemon
{
    if (p1.speed > p2.speed) {
        return p1;
    } else if (p2.speed > p1.speed) {
        return p2;
    }
}

export function attack(p1 : Pokemon) : number {
    const damage = (Math.floor(Math.floor(Math.floor(2 * p1.level / 5 + 2) * p1.offA * p1.power / p1.defS) / 50) + 2);
    p1.hp -= damage;
    return p1.hp;
}

export function combat(p1 : Pokemon, p2 : Pokemon): Pokemon {
    const PokeFirst = attackFirst(p1,p2);
    do {
        if (PokeFirst == p1) {
            attack(p2);
        } else {
            attack(p1);
        }

        const randomPoke = getRandomInt(2)
        if (randomPoke%2 === 0) {
            attack(p1);
        } else {
            attack(p2);
        }
    } while (p1.hp <= 0 || p2.hp <= 0)

    if(p1.hp <= 0) {
        return p1;
    } else {
        return p2;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



