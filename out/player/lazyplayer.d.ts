import { Universe } from "../universe/universe";
export declare class LazyPlayerReference {
    readonly universe: Universe;
    readonly timestamp: string;
    readonly id: string;
    constructor(data: XMLLazyPlayerReference, universe: Universe, timestamp: string);
}
export declare class PlayerReference extends LazyPlayerReference {
    readonly name: string;
    readonly allianceId?: string;
    readonly status?: string;
    constructor(universe: Universe, data: XMLPlayerReference, timestamp: string);
}
export interface XMLPlayerReference extends XMLLazyPlayerReference {
    name: string;
    alliance?: string;
    status?: string;
}
export interface XMLLazyPlayerReference {
    id: string;
}
