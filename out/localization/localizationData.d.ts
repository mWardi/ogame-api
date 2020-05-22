import { Universe } from "../universe/universe";
import { Localization, XMLLocalization } from "./localization";
import { FlexibleMap, ReadonlyCustomMap } from "../../typings/map";
import { Solo } from "../../typings/util";
import { APIAttributes } from "../xml";
export declare function parseXml(encodedData: XMLLocalizationData, universe: Universe): LocalizationMap;
export interface LocalizationGroups {
    techs: Localization[];
    missions: Localization[];
}
export interface LocalizationMap extends FlexibleMap<ReadonlyCustomMap<LocalizationGroups>> {
}
export interface XMLLocalizationData extends APIAttributes {
    [key: string]: XMLLocalizationGroup | string;
}
export interface XMLLocalizationGroup {
    name: Solo<XMLLocalization>;
}
