"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const fast_xml_parser_1 = require("fast-xml-parser");
const parsedCache = new Map();
const UpdateInterval = {
    players: 86400,
    universe: 604800,
    highscore: 3600,
    alliances: 86400,
    serverData: 86400,
    playerData: 604800
};
exports.parseXml = (xmlContent) => {
    return fast_xml_parser_1.parse(xmlContent, {
        textNodeName: "text",
        attributeNamePrefix: "",
        ignoreAttributes: false
    });
};
async function xml(request) {
    const apiResponse = await isomorphic_fetch_1.default(request)
        .then((res) => res.text())
        .then(exports.parseXml);
    return apiResponse;
}
exports.xml = xml;
;
async function fetch(endpoint, file, query = "") {
    const url = `${endpoint}/${file}.xml${query && "?"}${query}`;
    const cached = parsedCache.get(url);
    const age = Date.now() - (cached ? Number.parseInt(cached.timestamp) : 0);
    if (!cached || age >= UpdateInterval[file]) {
        const download = await xml(url);
        parsedCache.set(url, download);
        return download[file];
    }
    else
        return cached[file];
}
exports.fetch = fetch;
exports.resolveSolo = (solo) => {
    return (Array.isArray(solo) ? solo : [solo]);
};
exports.boolean = (object, keys) => {
    for (const key of keys) {
        object[key] = !!object[key];
    }
};
//# sourceMappingURL=xml.js.map