"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(_nom, _speed) {
        this.nom = _nom;
        this.speed = _speed;
        console.log(this.nom, this.speed);
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function attackFirst(p1, p2) {
    if (p1.speed > p2.speed) {
        return p1;
    }
    else if (p2.speed > p1.speed) {
        return p2;
    }
}
exports.attackFirst = attackFirst;
