"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localization_1 = require("./localization");
const xml_1 = require("../xml");
function parseXml(encodedData, universe) {
    const parsed = Object.entries(encodedData)
        .filter(([, value]) => typeof value === "object")
        .map(([key, value]) => [key, xml_1.resolveSolo(value.name)])
        .map(([key, value]) => [key, value.map(l => new localization_1.Localization(l, universe, encodedData.timestamp))]);
    return new Map(parsed);
}
exports.parseXml = parseXml;
;
//# sourceMappingURL=localizationData.js.map