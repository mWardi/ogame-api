"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const position_1 = require("./position");
const xml_1 = require("../xml");
function parseXml(encodedData, universe) {
    const array = xml_1.resolveSolo(encodedData.player);
    return array.map(position => new position_1.Position({
        score: position.score,
        position: position.position,
        type: encodedData.type,
        ships: position.ships,
        id: position.id
    }, universe, encodedData.timestamp));
}
exports.parseXml = parseXml;
;
;
//# sourceMappingURL=positionData.js.map