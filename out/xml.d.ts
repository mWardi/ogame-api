import { ResolveSolo } from "../typings/util";
export declare const parseXml: <T>(xmlContent: string) => T;
export declare function xml<T>(request: RequestInfo): Promise<T>;
export declare function fetch<T>(endpoint: string, file: string, query?: string): Promise<T>;
export interface APIAttributes {
    "xmlns:xsi": string;
    "xsi:noNamespaceSchemaLocation": string;
    timestamp: string;
    serverId: string;
}
export declare const resolveSolo: <T>(solo: T) => ResolveSolo<T>;
export declare const boolean: <T>(object: T, keys: { [K in keyof T]: T[K] extends boolean ? K : never; }[keyof T][]) => void;
