"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = require("../..");
const __2 = require("..");
const xml_1 = require("../../xml");
const universe = new __1.Universe(800, "en");
const before = __2.requireXml("universes.json");
ava_1.default.serial.before(before);
ava_1.default.serial.before(t => {
    const solo = t.context.xml.universe;
    t.context.xml = xml_1.resolveSolo(solo)[0];
});
ava_1.default.serial("constructor", t => {
    const encodedData = t.context.xml;
    t.notThrows(() => new __1.Universe(encodedData));
});
ava_1.default.serial("parseEndpoint", t => {
    const numerical = __1.Universe["parseEndpoint"](800, "en");
    const alphabetical = __1.Universe["parseEndpoint"]("Dorado", "es");
    const raw = __1.Universe["parseEndpoint"]("https://hyperion-en.ogame.nova.com/api");
    const xml = __1.Universe["parseEndpoint"]({
        href: "https://s999-en.ogame.gameforge.com",
        id: "999"
    });
    t.deepEqual(numerical, "https://s800-en.ogame.gameforge.com/api");
    t.deepEqual(alphabetical, "https://dorado-es.ogame.gameforge.com/api");
    t.deepEqual(raw, "https://hyperion-en.ogame.nova.com/api");
    t.deepEqual(xml, "https://s999-en.ogame.gameforge.com");
});
ava_1.default.serial("properties", t => {
    t.truthy(universe.endpoint);
});
//# sourceMappingURL=universe.js.map