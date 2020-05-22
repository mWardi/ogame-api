import { Region } from "../universe/universe";
export declare function getServers(): Promise<Server[]>;
interface Server {
    language: Region;
    number: number;
    name: string;
    playerCount: number;
    playersOnline: number;
    opened: number;
    startDate: number;
    serverClosed: boolean;
    prefered: boolean;
    signupClosed: boolean;
    settings: ServerSettings;
}
interface ServerSettings {
    aks: boolean;
    fleetSpeed: number;
    wreckField: number;
    serverLabel: string;
    economySpeed: number;
    planetFields: number;
    universeSize: number;
    serverCategory: ServerCategory;
    espionageProbeRaids: boolean;
    premiumValidationGift: number;
    debrisFieldFactorShips: number;
    debrisFieldFactorDefence: number;
}
declare type ServerCategory = "balanced" | "miner" | "fleeter";
export {};
