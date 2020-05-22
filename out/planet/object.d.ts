import { Universe } from "../universe/universe";
import { LazyPlayerReference } from "../player/lazyplayer";
export declare abstract class UniverseObject {
    readonly universe: Universe;
    readonly timestamp: string;
    readonly coords: string;
    readonly id: string;
    readonly name: string;
    readonly player: LazyPlayerReference;
    constructor(encodedData: XMLUniverseObject, universe: Universe, timestamp: string);
}
export interface XMLUniverseObject {
    id: string;
    player: string;
    name: string;
    coords: string;
}
