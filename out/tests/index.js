"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const OGameAPI = __importStar(require("../index"));
const path_1 = require("path");
const fs_1 = require("fs");
const util_1 = require("util");
const universe_1 = require("../universe/universe");
const coords_1 = require("../universe/coords");
const readFile = util_1.promisify(fs_1.readFile);
exports.xmlPath = path_1.join(__dirname, "../", "../", "src", "tests", "json");
exports.requireXml = (filename) => {
    const path = path_1.join(exports.xmlPath, filename);
    return async (t) => {
        const file = await readFile(path).then(v => v.toString()).catch(v => t.fail(v));
        t.context.xml = JSON.parse(file);
    };
};
ava_1.default.serial("exports", t => {
    t.deepEqual(OGameAPI.Universe, universe_1.Universe);
    t.deepEqual(OGameAPI.Coords, coords_1.Coords);
});
//# sourceMappingURL=index.js.map