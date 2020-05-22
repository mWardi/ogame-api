export declare class PlayerStatus {
    inactive: boolean;
    longInactive: boolean;
    vacation: boolean;
    administrator: boolean;
    constructor(encodedData: string);
    toString(): string;
}
