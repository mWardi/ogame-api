import { Universe } from "../universe/universe";
export declare class LazyAlliance {
    readonly universe: Universe;
    readonly timestamp: string;
    readonly name: string;
    readonly tag: string;
    readonly id: string;
    constructor(encodedData: XMLLazyAlliance, universe: Universe, timestamp: string);
}
export interface XMLLazyAlliance {
    name: string;
    tag: string;
    id: string;
}
