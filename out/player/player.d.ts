import { Position, XMLPosition } from "../position/position";
import { Planet, XMLPlayerPlanet } from "../planet/planet";
import { LazyAlliance, XMLLazyAlliance } from "../alliance/lazyalliance";
import { Solo } from "../../typings/util";
import { Universe } from "../universe/universe";
import { APIAttributes } from "../xml";
export declare class Player {
    universe: Universe;
    readonly name: string;
    readonly id: string;
    readonly positions: PlayerPositions;
    readonly planets: Planet[];
    readonly alliance?: LazyAlliance;
    readonly timestamp: string;
    constructor(encodedData: XMLPlayer, universe: Universe);
    private parsePositions;
    private parsePlanets;
    private parseAlliance;
}
export interface XMLPlayer extends APIAttributes {
    positions: {
        position: XMLPlayerPosition[];
    };
    planets: {
        planet: Solo<XMLPlayerPlanet>;
    };
    alliance?: XMLLazyAlliance;
    id: string;
    name: string;
}
export interface XMLPlayerPosition {
    text: string;
    type: string;
    score: string;
}
export interface XMLMilitaryPlayerPosition extends XMLPosition {
    ships: string;
}
export declare type MilitaryPosition = Position & XMLMilitaryPlayerPosition;
declare type PlayerPositions = [Position, Position, Position, MilitaryPosition, Position, Position, Position];
export {};
