"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lazyplayer_1 = require("../player/lazyplayer");
const xml_1 = require("../xml");
class Alliance {
    constructor(encodedData, universe, timestamp) {
        this.universe = universe;
        this.timestamp = timestamp;
        this.id = encodedData.id;
        this.name = encodedData.name;
        this.tag = encodedData.tag;
        this.founder = new lazyplayer_1.LazyPlayerReference({
            id: encodedData.founder
        }, universe, timestamp);
        this.foundDate = encodedData.foundDate;
        this.logo = encodedData.logo;
        this.open = !!encodedData.open;
        this.homepage = encodedData.homepage;
        this.members = this.parseMembers(encodedData.player);
    }
    parseMembers(members) {
        const array = members && xml_1.resolveSolo(members);
        return array ? array.map(member => {
            return new lazyplayer_1.LazyPlayerReference(member, this.universe, this.timestamp);
        }) : [];
    }
}
exports.Alliance = Alliance;
//# sourceMappingURL=alliance.js.map