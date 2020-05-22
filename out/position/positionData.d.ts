import { Universe } from "../universe/universe";
import { Position, PositionType, XMLPosition, PositionCategory } from "./position";
import { Solo } from "../../typings/util";
import { XMLMilitaryPlayerPosition, MilitaryPosition } from "../player/player";
import { APIAttributes } from "../xml";
export declare function parseXml<C extends PositionCategory, K extends PositionType>(encodedData: XMLPositionData<C, K>, universe: Universe): PositionFetch<C, K>[];
declare type XMLPositionFetch<C extends PositionCategory, K extends PositionType> = C extends PositionCategory.PLAYER ? K extends PositionType.MILITARY ? XMLMilitaryPlayerPosition : XMLPosition : XMLPosition;
export declare type PositionFetch<C extends PositionCategory, K extends PositionType> = XMLPositionFetch<C, K> extends XMLMilitaryPlayerPosition ? MilitaryPosition : Position;
export interface XMLPositionData<C extends PositionCategory, K extends PositionType> extends APIAttributes {
    category: C;
    type: K;
    player: Solo<XMLPositionFetch<C, K>>;
}
export {};
