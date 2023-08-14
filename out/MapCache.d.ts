declare class MapCache {
    maxCache: number;
    ttl: number;
    cache: Map<string, any>;
    timer: Map<string, any>;
    constructor(options: any);
    constructCacheKey(req: any): string;
    clearOverflow(): void;
    setTimer(key: string): void;
    set(req: any, message: any): void;
    get(req: any): any;
}
export default MapCache;
