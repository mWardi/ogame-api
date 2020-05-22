"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lazyplayer_1 = require("../player/lazyplayer");
class UniverseObject {
    constructor(encodedData, universe, timestamp) {
        this.universe = universe;
        this.timestamp = timestamp;
        this.coords = encodedData.coords;
        this.id = encodedData.id;
        this.name = encodedData.name;
        this.player = new lazyplayer_1.LazyPlayerReference({
            id: encodedData.player
        }, universe, timestamp);
    }
}
exports.UniverseObject = UniverseObject;
//# sourceMappingURL=object.js.map