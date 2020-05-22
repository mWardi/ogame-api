"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const planet_1 = require("../../report/planet");
ava_1.default.serial("parseReport", t => {
    const encodedData = `coords;1:1:1|${"204"};500|${"214"};1`;
    const [coords, props] = planet_1.parseReport(encodedData);
    t.deepEqual(coords, "1:1:1");
    t.deepEqual(props.size, 2);
    t.deepEqual(props.get("204"), 500);
    t.deepEqual(props.get("214"), 1);
});
//# sourceMappingURL=planet.js.map