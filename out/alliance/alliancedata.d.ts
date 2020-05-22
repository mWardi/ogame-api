import { Universe } from "../universe/universe";
import { Alliance, XMLAlliance } from "./alliance";
import { Solo } from "../../typings/util";
import { APIAttributes } from "../xml";
export declare function parseXml(encodedData: XMLAllianceData, universe: Universe): Alliance[];
export interface XMLAllianceData extends APIAttributes {
    alliance: Solo<XMLAlliance>;
}
