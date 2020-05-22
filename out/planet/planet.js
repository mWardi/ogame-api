"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
const moon_1 = require("./moon");
class Planet extends object_1.UniverseObject {
    constructor(encodedData, universe, timestamp, player) {
        encodedData.player = encodedData.player || player;
        super(encodedData, universe, timestamp);
        if (encodedData.moon) {
            this.moon = new moon_1.Moon(encodedData.moon, encodedData, this.universe, timestamp);
        }
    }
}
exports.Planet = Planet;
//# sourceMappingURL=planet.js.map