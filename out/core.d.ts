import Requestor from "./Requestor.js";
import MapCache from "./MapCache.js";
declare class Core {
    requestor: Requestor;
    cache: MapCache;
    constructor(initOptions: any);
    checkParams(url: string, options: any): void;
    request(url: string, options: any): Promise<unknown>;
}
export default Core;
