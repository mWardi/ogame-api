import { Universe } from "../universe/universe";
export declare class Position {
    readonly universe: Universe;
    readonly timestamp: string;
    readonly type: PositionType;
    readonly score: string;
    readonly position: string;
    readonly ships?: string;
    readonly id: string;
    constructor(encodedData: XMLPosition, universe: Universe, timestamp: string);
}
export interface XMLPosition {
    position: string;
    ships?: string;
    type: PositionType;
    score: string;
    id: string;
}
export declare const enum PositionType {
    TOTAL = "0",
    ECONOMY = "1",
    RESEARCH = "2",
    MILITARY = "3",
    MILITARY_BUILT = "5",
    MILITARY_DESTROYED = "6",
    MILITARY_LOST = "4",
    HONOR = "7"
}
export declare const enum PositionCategory {
    PLAYER = "1",
    ALLIANCE = "2"
}
