export declare class Coords {
    readonly galaxy: number;
    readonly system: number;
    readonly position: number;
    constructor(encodedData: string);
    constructor(galaxy: number, system: number, position: number);
    toString(): string;
    equals(coords: Coords): boolean;
    private static parseString;
}
