"use strict";
exports.__esModule = true;
var tp_pokemon_1 = require("./tp_pokemon");
var pikachu = new tp_pokemon_1.Pokemon("Pikachu", 55);
var charmander = new tp_pokemon_1.Pokemon("Charmander", 52);
describe('first to attack', function () {
    it('Pikachu should attack first when against charmander', function () {
        expect(tp_pokemon_1.attackFirst(pikachu, charmander)).toBe(pikachu);
    });
});
