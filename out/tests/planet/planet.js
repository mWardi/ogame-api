"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = require("../..");
const __2 = require("..");
const planet_1 = require("../../planet/planet");
const xml_1 = require("../../xml");
const universe = new __1.Universe(800, "en");
const before = __2.requireXml("planetData.json");
ava_1.default.serial.before(before);
ava_1.default.serial.before(t => {
    const xml = t.context.xml;
    t.context.timestamp = xml.timestamp;
    t.context.xml = xml_1.resolveSolo(xml.planet)[0];
});
ava_1.default.serial("constructor", t => {
    const ctx = t.context;
    t.notThrows(() => new planet_1.Planet(ctx.xml, universe, ctx.timestamp));
});
ava_1.default.serial("properties", t => {
    const ctx = t.context;
    const planet = new planet_1.Planet(ctx.xml, universe, ctx.timestamp);
    t.deepEqual(planet.moon, ctx.xml.moon);
});
//# sourceMappingURL=planet.js.map