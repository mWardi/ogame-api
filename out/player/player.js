"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const position_1 = require("../position/position");
const planet_1 = require("../planet/planet");
const lazyalliance_1 = require("../alliance/lazyalliance");
const xml_1 = require("../xml");
class Player {
    constructor(encodedData, universe) {
        this.universe = universe;
        this.name = encodedData.name;
        this.id = encodedData.id;
        this.timestamp = encodedData.timestamp;
        this.positions = this.parsePositions(encodedData.positions.position);
        this.planets = this.parsePlanets(encodedData.planets.planet);
        this.alliance = this.parseAlliance(encodedData.alliance);
    }
    parsePositions(positions) {
        return positions && positions.map(playerPosition => {
            playerPosition.position = playerPosition.text;
            playerPosition.id = this.id;
            return new position_1.Position(playerPosition, this.universe, this.timestamp);
        });
    }
    parsePlanets(planets) {
        const planetArray = xml_1.resolveSolo(planets)
            .sort((a, b) => a < b ? -1 : 1);
        return planetArray.map(planet => {
            return new planet_1.Planet(planet, this.universe, this.timestamp, this.id);
        });
    }
    parseAlliance(alliance) {
        return alliance && new lazyalliance_1.LazyAlliance(alliance, this.universe, this.timestamp);
    }
}
exports.Player = Player;
;
//# sourceMappingURL=player.js.map