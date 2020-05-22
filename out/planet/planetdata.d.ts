import { Universe } from "../universe/universe";
import { Planet, XMLUniversePlanet } from "./planet";
import { Solo } from "../../typings/util";
import { APIAttributes } from "../xml";
export declare function parseXml(encodedData: XMLPlanetData, universe: Universe): Planet[];
export interface XMLPlanetData extends APIAttributes {
    planet: Solo<XMLUniversePlanet>;
}
