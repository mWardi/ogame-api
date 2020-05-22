import { Region } from "../universe/universe";
import { FlexibleMap, ReadonlyCustomMap } from "../../typings/map";
export declare function parseXml(encodedData: XMLServerData, xsd: XsdList): ServerMap;
export declare function getXsd(endpoint: string): Promise<XsdList>;
interface ServerData {
    timestamp: number;
    serverId: string;
    name: string;
    number: number;
    language: Region;
    timezone: string;
    timezoneOffset: string;
    domain: string;
    version: string;
    speed: number;
    speedFleet: number;
    galaxies: number;
    systems: number;
    acs: boolean;
    rapidFire: boolean;
    defToTF: number;
    debrisFactor: number;
    debrisFactorDef: number;
    repairFactor: number;
    newbieProtectionLimit: number;
    newbieProtectionHigh: number;
    topScore: number;
    bonusFields: number;
    donutGalaxy: boolean;
    donutSystem: boolean;
    wfEnabled: boolean;
    wfMinimumRessLost: number;
    wfMinimumLossPercentage: number;
    wfBasicPercentageRepairable: number;
    globalDeuteriumSaveFactor: number;
    bashLimit: number;
    probeCargo: number;
    researchDurationDivisor: number;
    darkMatterNewAccount: number;
    cargoHyperspaceTechMultiplier: number;
    marketplaceEnabled: boolean;
    marketplaceBasicTradeRatioMetal: number;
    marketplaceBasicTradeRatioCrystal: number;
    marketplaceBasicTradeRatioDeuterium: number;
    marketplacePriceRangeLower: number;
    marketplacePriceRangeUpper: number;
    marketplaceTaxNormalUser: number;
    marketplaceTaxAdmiral: number;
    marketplaceTaxCancelOffer: number;
    marketplaceTaxNotSold: number;
    marketplaceOfferTimeout: number;
    characterClassesEnabled: boolean;
    minerBonusResourceProduction: number;
    minerBonusFasterTradingShips: number;
    minerBonusIncreasedCargoCapacityForTradingShips: number;
    minerBonusAdditionalFleetSlots: number;
    resourceBuggyProductionBoost: number;
    resourceBuggyMaxProductionBoost: number;
    resourceBuggyEnergyConsumptionPerUnit: number;
    warriorBonusFasterCombatShips: number;
    warriorBonusFasterRecyclers: number;
    warriorBonusRecyclerFuelConsumption: number;
    combatDebrisFieldLimit: number;
    explorerBonusIncreasedResearchSpeed: number;
    explorerBonusIncreasedExpeditionOutcome: number;
    explorerBonusLargerPlanets: number;
    explorerUnitItemsPerDay: number;
}
export interface XMLServerData {
    [key: string]: string | boolean | number;
}
declare type XsdType = "xs:integer" | "xs:float" | "xs:int" | "xs:string" | "xs:boolean";
declare type XsdList = ({
    name: string;
    type: XsdType;
})[];
export interface ServerMap extends FlexibleMap<ReadonlyCustomMap<ServerData>> {
}
export {};
