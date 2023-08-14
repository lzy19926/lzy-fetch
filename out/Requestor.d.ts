declare class Requestor {
    middlewares: any[];
    constructor();
    use(middleware: any): void;
    registMiddleware(): void;
    checkMiddlewares(middlewares: any[]): any[];
    execute(param?: any): Promise<any>;
}
export default Requestor;
