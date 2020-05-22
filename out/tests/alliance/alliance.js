"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const alliance_1 = require("../../alliance/alliance");
const __1 = require("../..");
const __2 = require("..");
const universe = new __1.Universe(800, "en");
const before = __2.requireXml("alliance.json");
ava_1.default.serial.before(before);
ava_1.default.serial("constructor", t => {
    const encodedData = t.context.xml;
    t.notThrows(() => {
        new alliance_1.Alliance(encodedData.alliance, universe, encodedData.timestamp);
    });
});
ava_1.default.serial("properties", t => {
    const encodedData = t.context.xml;
    const encAlliance = encodedData.alliance;
    const alliance = new alliance_1.Alliance(encAlliance, universe, encodedData.timestamp);
    t.deepEqual(alliance.timestamp, encodedData.timestamp);
    t.deepEqual(alliance.id, encAlliance.id);
    t.deepEqual(alliance.name, encAlliance.name);
    t.deepEqual(alliance.tag, encAlliance.tag);
    t.deepEqual(alliance.foundDate, encAlliance.foundDate);
    t.deepEqual(alliance.logo, encAlliance.logo);
    t.deepEqual(alliance.open, !!encAlliance.open);
    t.deepEqual(alliance.homepage, encAlliance.homepage);
});
ava_1.default.serial("parseMembers", t => {
    const encodedData = t.context.xml;
    const encAlliance = encodedData.alliance;
    const members = alliance_1.Alliance.prototype["parseMembers"](encAlliance.player);
    t.truthy(members.length);
    t.deepEqual(members[0].id, encAlliance.player.id);
});
//# sourceMappingURL=alliance.js.map