import { Planet } from "../planet/planet";
import { ServerMap } from "../server/serverData";
import { LocalizationMap } from "../localization/localizationData";
import { PositionFetch } from "../position/positionData";
import { PositionType, PositionCategory } from "../position/position";
import { Player } from "../player/player";
import { PlayerReference } from "../player/lazyplayer";
import { Alliance } from "../alliance/alliance";
export declare type ID = number | string;
export declare class Universe {
    readonly endpoint: string;
    constructor(id: ID, region: Region);
    constructor(encodedData: XMLUniverse);
    constructor(endpoint: string);
    getPlayers(): Promise<PlayerReference[]>;
    getPlanets(): Promise<Planet[]>;
    getAlliances(): Promise<Alliance[]>;
    getPlayerPositions<T extends PositionType>(type: T): Promise<PositionFetch<PositionCategory.PLAYER, T>[]>;
    getAlliancePositions<T extends PositionType>(type: T): Promise<import("../position/position").Position[]>;
    getServer(): Promise<ServerMap>;
    getLocalizations(): Promise<LocalizationMap>;
    getPlayer(id: string): Promise<Player>;
    private static parseEndpoint;
}
export interface XMLUniverse {
    id: string;
    href: string;
}
export declare type Region = "ar" | "br" | "dk" | "de" | "es" | "fr" | "hr" | "it" | "hu" | "mx" | "nl" | "no" | "pl" | "pt" | "ro" | "si" | "sk" | "fi" | "se" | "tr" | "us" | "en" | "cz" | "gr" | "ru" | "tw" | "jp";
