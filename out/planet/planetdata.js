"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const planet_1 = require("./planet");
const xml_1 = require("../xml");
function parseXml(encodedData, universe) {
    const planetArray = xml_1.resolveSolo(encodedData.planet);
    return planetArray.map(planet => new planet_1.Planet(planet, universe, encodedData.timestamp));
}
exports.parseXml = parseXml;
//# sourceMappingURL=planetdata.js.map