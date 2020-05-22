"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const coords_1 = require("../../universe/coords");
ava_1.default("constructor", t => {
    t.plan(0);
    new coords_1.Coords(0, 0, 0);
});
ava_1.default("toString", t => {
    const coords = new coords_1.Coords(0, 0, 0);
    t.deepEqual(coords.toString(), "0:0:0");
});
ava_1.default("equals", t => {
    const coords = new coords_1.Coords(0, 0, 0);
    const assert = new coords_1.Coords(0, 0, 0);
    t.true(coords.equals(assert));
});
ava_1.default("jsEquals", t => {
    const coords = new coords_1.Coords(0, 0, 0);
    const assert = new coords_1.Coords(0, 0, 0);
    t.deepEqual(coords, assert);
});
//# sourceMappingURL=coords.js.map