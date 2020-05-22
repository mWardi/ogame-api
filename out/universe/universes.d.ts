import { Solo } from "../../typings/util";
import { XMLUniverse, Region, ID, Universe } from "./universe";
export declare function getUniverses(base: ID, region: Region): Promise<Universe[]>;
export interface XMLUniverses {
    universe: Solo<XMLUniverse>;
}
