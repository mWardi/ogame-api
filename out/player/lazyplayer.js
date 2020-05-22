"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LazyPlayerReference {
    constructor(data, universe, timestamp) {
        this.universe = universe;
        this.timestamp = timestamp;
        this.id = data.id;
    }
}
exports.LazyPlayerReference = LazyPlayerReference;
class PlayerReference extends LazyPlayerReference {
    constructor(universe, data, timestamp) {
        super(data, universe, timestamp);
        this.name = data.name;
        this.allianceId = data.alliance;
        this.status = data.status;
    }
}
exports.PlayerReference = PlayerReference;
//# sourceMappingURL=lazyplayer.js.map