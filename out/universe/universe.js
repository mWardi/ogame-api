"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerdata_1 = require("../player/playerdata");
const planetdata_1 = require("../planet/planetdata");
const alliancedata_1 = require("../alliance/alliancedata");
const serverData_1 = require("../server/serverData");
const localizationData_1 = require("../localization/localizationData");
const positionData_1 = require("../position/positionData");
const player_1 = require("../player/player");
const xml_1 = require("../xml");
class Universe {
    constructor(encodedData, arg1) {
        this.endpoint = Universe["parseEndpoint"](encodedData, arg1);
    }
    async getPlayers() {
        const playerData = await xml_1.fetch(this.endpoint, "players");
        return playerdata_1.parseXml(playerData, this);
    }
    async getPlanets() {
        const planetData = await xml_1.fetch(this.endpoint, "universe");
        return planetdata_1.parseXml(planetData, this);
    }
    async getAlliances() {
        const allianceData = await xml_1.fetch(this.endpoint, "alliances");
        return alliancedata_1.parseXml(allianceData, this);
    }
    ;
    async getPlayerPositions(type) {
        const query = `category=1&type=${type}`;
        const positionsData = await xml_1.fetch(this.endpoint, "highscore", query);
        const positions = positionData_1.parseXml(positionsData, this);
        return positions;
    }
    ;
    async getAlliancePositions(type) {
        const query = `category=2&type=${type}`;
        const positionsData = await xml_1.fetch(this.endpoint, "highscore", query);
        const positions = positionData_1.parseXml(positionsData, this);
        return positions;
    }
    async getServer() {
        const serverData = await xml_1.fetch(this.endpoint, "serverData");
        const xsd = await serverData_1.getXsd(this.endpoint);
        return serverData_1.parseXml(serverData, xsd);
    }
    async getLocalizations() {
        const localizationData = await xml_1.fetch(this.endpoint, "localization");
        return localizationData_1.parseXml(localizationData, this);
    }
    async getPlayer(id) {
        const playerData = await xml_1.fetch(this.endpoint, "playerData", `id=${id}`);
        return new player_1.Player(playerData, this);
    }
    static parseEndpoint(arg1, arg2) {
        const factory = (id, region) => `https://${id}-${region}.ogame.gameforge.com/api`;
        const endpoint = !arg2 ? arg1["href"] || arg1
            : factory(typeof arg1 === "number" ? "s" + arg1 : arg1.toLowerCase(), arg2);
        return endpoint;
    }
}
exports.Universe = Universe;
//# sourceMappingURL=universe.js.map