"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alliance_1 = require("./alliance");
const xml_1 = require("../xml");
function parseXml(encodedData, universe) {
    const allianceArray = xml_1.resolveSolo(encodedData.alliance);
    return allianceArray.map(alliance => new alliance_1.Alliance(alliance, universe, encodedData.timestamp));
}
exports.parseXml = parseXml;
//# sourceMappingURL=alliancedata.js.map