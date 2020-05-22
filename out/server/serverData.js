"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xml_1 = require("../xml");
function parseXml(encodedData, xsd) {
    const serverMap = new Map();
    const boolean = xsd.filter(v => v.type === "xs:boolean");
    for (const { name } of boolean) {
        encodedData[name] = !!encodedData[name];
    }
    for (const entry in encodedData) {
        const value = encodedData[entry];
        serverMap.set(entry, value);
    }
    return serverMap;
}
exports.parseXml = parseXml;
async function getXsd(endpoint) {
    const xsd = await xml_1.xml(endpoint + "/xsd/serverData.xsd");
    const list = xsd["xs:schema"]["xs:element"]["xs:complexType"]["xs:sequence"]["xs:element"];
    return list;
}
exports.getXsd = getXsd;
;
//# sourceMappingURL=serverData.js.map