"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LazyAlliance {
    constructor(encodedData, universe, timestamp) {
        this.universe = universe;
        this.timestamp = timestamp;
        this.name = encodedData.name;
        this.tag = encodedData.tag;
        this.id = encodedData.id;
    }
}
exports.LazyAlliance = LazyAlliance;
//# sourceMappingURL=lazyalliance.js.map