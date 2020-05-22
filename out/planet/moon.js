"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
class Moon extends object_1.UniverseObject {
    constructor(encodedData, planet, universe, timestamp) {
        encodedData.coords = planet.coords;
        encodedData.player = planet.player;
        super(encodedData, universe, timestamp);
        this.size = encodedData.size;
    }
}
exports.Moon = Moon;
//# sourceMappingURL=moon.js.map