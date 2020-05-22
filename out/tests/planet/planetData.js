"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = require("..");
const planetdata_1 = require("../../planet/planetdata");
const __2 = require("../..");
const xml_1 = require("../../xml");
const universe = new __2.Universe(800, "en");
const before = __1.requireXml("planetData.json");
ava_1.default.serial.before(before);
ava_1.default.serial("parseXml", t => {
    const xml = t.context.xml;
    let planetData = undefined;
    t.notThrows(() => {
        planetData = planetdata_1.parseXml(xml, universe);
    });
    const solo = xml_1.resolveSolo(xml.planet);
    t.deepEqual(planetData.length, solo.length);
});
//# sourceMappingURL=planetData.js.map