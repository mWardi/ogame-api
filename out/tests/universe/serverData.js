"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = require("..");
const before = __1.requireXml("serverData.json");
ava_1.default.serial.before(before);
const booleanValues = ["acs", "rapidFire", "donutGalaxy", "donutSystem", "wfEnabled"];
ava_1.default.serial.skip("parseXml", t => {
    const { xml } = t.context;
    let serverData = undefined;
    t.notThrows(() => {
    });
    for (const [key, value] of Object.entries(xml)) {
        const val = booleanValues.includes(key) ? !!value : value;
        t.deepEqual(val, serverData.get(key));
    }
});
//# sourceMappingURL=serverData.js.map