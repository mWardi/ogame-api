import { UniverseObject, XMLUniverseObject } from "./object";
import { Universe } from "../universe/universe";
import { Moon, XMLMoon } from "./moon";
export declare class Planet extends UniverseObject {
    readonly moon?: Moon;
    constructor(encodedData: XMLUniversePlanet, universe: Universe, timestamp: string);
    constructor(encodedData: XMLPlayerPlanet, universe: Universe, timestamp: string, player: string);
}
export interface XMLUniversePlanet extends XMLUniverseObject {
    moon?: XMLMoon;
}
export declare type XMLPlayerPlanet = Omit<XMLUniversePlanet, "player">;
export declare type XMLPlanet = XMLUniversePlanet | XMLPlayerPlanet;
