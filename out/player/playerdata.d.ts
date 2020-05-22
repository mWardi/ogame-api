import { Universe } from "../universe/universe";
import { PlayerReference, XMLPlayerReference } from "./lazyplayer";
import { Solo } from "../../typings/util";
import { APIAttributes } from "../xml";
export declare function parseXml(encodedData: XMLPlayerData, universe: Universe): PlayerReference[];
export interface XMLPlayerData extends APIAttributes {
    player: Solo<XMLPlayerReference>;
}
