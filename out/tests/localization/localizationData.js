"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = require("..");
const localizationData_1 = require("../../localization/localizationData");
const __2 = require("../..");
const xml_1 = require("../../xml");
const universe = new __2.Universe(800, "en");
const before = __1.requireXml("localizationData.json");
ava_1.default.serial.before(before);
ava_1.default.serial("parseXml", t => {
    const { xml } = t.context;
    let localizationData = undefined;
    t.notThrows(() => {
        localizationData = localizationData_1.parseXml(xml, universe);
    });
    const length = [...localizationData.values()]
        .map(group => group.length)
        .reduce((acc, val) => acc + val);
    t.deepEqual(localizationData.size, 2);
    t.deepEqual(length, 3);
});
function getLocalizationEntries(xml) {
    return Object.entries(xml)
        .filter(([, value]) => typeof value === "object")
        .map(([, value]) => xml_1.resolveSolo(value.name));
}
//# sourceMappingURL=localizationData.js.map