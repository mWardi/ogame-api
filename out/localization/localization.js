"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Localization {
    constructor(encodedData, universe, timestamp) {
        this.universe = universe;
        this.timestamp = timestamp;
        this.id = encodedData.id;
        this.name = encodedData.text;
        this.universe = universe;
        this.timestamp = timestamp;
    }
}
exports.Localization = Localization;
//# sourceMappingURL=localization.js.map