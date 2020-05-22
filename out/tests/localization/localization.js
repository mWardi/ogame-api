"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const localization_1 = require("../../localization/localization");
const __1 = require("..");
const __2 = require("../..");
const xml_1 = require("../../xml");
const universe = new __2.Universe(800, "en");
const before = __1.requireXml("localizationData.json");
ava_1.default.serial.before(before);
ava_1.default.serial.before(t => {
    const { xml } = t.context;
    const solo = xml_1.resolveSolo(xml.techs.name);
    t.context.xml = solo[0];
    t.context.timestamp = xml.timestamp;
});
ava_1.default.serial("constructor", t => {
    const { xml, timestamp } = t.context;
    t.notThrows(() => new localization_1.Localization(xml, universe, timestamp));
});
ava_1.default.serial("properties", t => {
    const { xml, timestamp } = t.context;
    const localization = new localization_1.Localization(xml, universe, timestamp);
    t.deepEqual(localization.id, xml.id);
    t.deepEqual(localization.name, xml.text);
    t.deepEqual(localization.timestamp, timestamp);
});
//# sourceMappingURL=localization.js.map