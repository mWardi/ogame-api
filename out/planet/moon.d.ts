import { Universe } from "../universe/universe";
import { XMLUniversePlanet } from "./planet";
import { UniverseObject } from "./object";
export declare class Moon extends UniverseObject {
    readonly size: string;
    constructor(encodedData: XMLMoon, planet: XMLUniversePlanet, universe: Universe, timestamp: string);
}
export interface XMLMoon {
    id: string;
    name: string;
    size: string;
}
