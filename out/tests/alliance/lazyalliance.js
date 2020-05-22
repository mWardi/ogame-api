"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const lazyalliance_1 = require("../../alliance/lazyalliance");
const __1 = require("../..");
const __2 = require("..");
const universe = new __1.Universe(800, "en");
const before = __2.requireXml("lazyalliance.json");
ava_1.default.serial.before(before);
ava_1.default.serial("constructor", t => {
    const encodedData = t.context.xml;
    t.notThrows(() => new lazyalliance_1.LazyAlliance(encodedData, universe, "1337"));
});
ava_1.default.serial("properties", t => {
    const encodedData = t.context.xml;
    const alliance = new lazyalliance_1.LazyAlliance(encodedData, universe, "1337");
    t.deepEqual(alliance.id, encodedData.id);
    t.deepEqual(alliance.name, encodedData.name);
    t.deepEqual(alliance.tag, encodedData.tag);
    t.deepEqual(alliance.timestamp, "1337");
    t.deepEqual(alliance.universe, universe);
});
//# sourceMappingURL=lazyalliance.js.map