"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = require("..");
const universe_1 = require("../../universe/universe");
const object_1 = require("../../planet/object");
const xml_1 = require("../../xml");
const universe = new universe_1.Universe(800, "en");
const before = __1.requireXml("planetData.json");
ava_1.default.serial.before(before);
ava_1.default.serial.before(t => {
    const xml = t.context.xml;
    t.context.timestamp = xml.timestamp;
    t.context.xml = xml_1.resolveSolo(xml.planet)[0];
});
ava_1.default.serial("constructor", t => {
    const ctx = t.context;
    t.notThrows(() => new object_1.UniverseObject(ctx.xml, universe, ctx.timestamp));
});
ava_1.default.serial("properties", t => {
    const ctx = t.context;
    const object = new object_1.UniverseObject(ctx.xml, universe, ctx.timestamp);
    t.deepEqual(object.coords, ctx.xml.coords);
    t.deepEqual(object.id, ctx.xml.id);
    t.deepEqual(object.name, ctx.xml.name);
    t.deepEqual(object.player.id, ctx.xml.player);
    t.deepEqual(object.timestamp, ctx.timestamp);
});
//# sourceMappingURL=object.js.map