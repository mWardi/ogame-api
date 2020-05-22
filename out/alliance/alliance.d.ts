import { LazyPlayerReference, XMLLazyPlayerReference } from "../player/lazyplayer";
import { Universe } from "../universe/universe";
import { Solo } from "../../typings/util";
export declare class Alliance {
    readonly universe: Universe;
    readonly timestamp: string;
    readonly id: string;
    readonly name: string;
    readonly tag: string;
    readonly founder: LazyPlayerReference;
    readonly foundDate: string;
    readonly logo?: string;
    readonly open: boolean;
    readonly homepage?: string;
    readonly members: LazyPlayerReference[];
    constructor(encodedData: XMLAlliance, universe: Universe, timestamp: string);
    private parseMembers;
}
export interface XMLAlliance {
    player: Solo<XMLLazyPlayerReference>;
    id: string;
    name: string;
    tag: string;
    founder: string;
    foundDate: string;
    logo?: string;
    open?: string;
    homepage?: string;
}
