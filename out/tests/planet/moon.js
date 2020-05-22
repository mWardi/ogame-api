"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const moon_1 = require("../../planet/moon");
const __1 = require("..");
const universe_1 = require("../../universe/universe");
const xml_1 = require("../../xml");
const universe = new universe_1.Universe(800, "en");
const before = __1.requireXml("planetData.json");
ava_1.default.serial.before(before);
ava_1.default.serial.before(t => {
    const xml = t.context.xml;
    t.context.timestamp = xml.timestamp;
    t.context.planet = xml_1.resolveSolo(xml.planet).filter(p => p.moon)[0];
    t.context.xml = t.context.planet.moon;
});
ava_1.default.serial("constructor", t => {
    const ctx = t.context;
    t.notThrows(() => new moon_1.Moon(ctx.xml, ctx.planet, universe, ctx.timestamp));
});
ava_1.default.serial("properties", t => {
    const ctx = t.context;
    const moon = new moon_1.Moon(ctx.xml, ctx.planet, universe, ctx.timestamp);
    t.deepEqual(moon.coords, ctx.planet.coords);
    t.deepEqual(moon.id, ctx.xml.id);
    t.deepEqual(moon.name, ctx.xml.name);
    t.deepEqual(moon.player.id, ctx.planet.player);
    t.deepEqual(moon.size, ctx.xml.size);
    t.deepEqual(moon.timestamp, ctx.timestamp);
});
//# sourceMappingURL=moon.js.map