"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lazyplayer_1 = require("./lazyplayer");
const xml_1 = require("../xml");
function parseXml(encodedData, universe) {
    const playerArray = xml_1.resolveSolo(encodedData.player);
    return playerArray.map(player => new lazyplayer_1.PlayerReference(universe, player, encodedData.timestamp));
}
exports.parseXml = parseXml;
//# sourceMappingURL=playerdata.js.map