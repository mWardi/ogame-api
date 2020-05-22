import { ExecutionContext } from "ava";
export declare const xmlPath: string;
export declare const requireXml: (filename: string) => (t: ExecutionContext<unknown>) => Promise<void>;
export interface XMLContext<T> {
    xml: T;
}
