"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(encodedData, universe, timestamp) {
        this.universe = universe;
        this.timestamp = timestamp;
        this.type = encodedData.type;
        this.score = encodedData.score;
        this.position = encodedData.position;
        this.id = encodedData.id;
        if (encodedData.ships) {
            this.ships = encodedData.ships;
        }
    }
}
exports.Position = Position;
;
//# sourceMappingURL=position.js.map