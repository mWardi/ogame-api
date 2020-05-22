"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const universe_1 = require("./universe");
const xml_1 = require("../xml");
async function getUniverses(base, region) {
    const endpoint = universe_1.Universe["parseEndpoint"](base, region);
    const universeData = await xml_1.fetch(endpoint, "universes");
    const list = xml_1.resolveSolo(universeData.universe);
    return list.map(universe => new universe_1.Universe(universe));
}
exports.getUniverses = getUniverses;
//# sourceMappingURL=universes.js.map