"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coords {
    constructor(arg1, system, position) {
        const array = typeof arg1 === "string" ? Coords.parseString(arg1) : [arg1, system, position];
        [this.galaxy, this.position, this.system] = array;
    }
    toString() {
        return `${this.galaxy}:${this.system}:${this.position}`;
    }
    ;
    equals(coords) {
        return coords.galaxy === this.galaxy && coords.system === this.system && coords.position === this.position;
    }
    ;
    static parseString(coords) {
        return coords.split(":", 3)
            .map(v => parseInt(v));
    }
    ;
}
exports.Coords = Coords;
;
//# sourceMappingURL=coords.js.map