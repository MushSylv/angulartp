import { Pokemon, attackFirst, attack, combat} from './tp_pokemon';

let pikachu = new Pokemon("Pikachu", 55, 12, 10,8,6,4)
let charmander = new Pokemon("Charmander", 52,10,8,6,4,2)

describe('first to attack', () => {
    it('Pikachu should attack first when against charmander', () => {
        expect(attackFirst(pikachu, charmander)).toBe(pikachu)
    })
})

describe('first to attack', () => {
    it('Pikachu should won against charmander', () => {
        expect(combat(pikachu, charmander)).toBe(pikachu)
    })
})
