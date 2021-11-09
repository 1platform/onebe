import ServiceBase from "./ServiceBase";
export default class ServiceLoader {
    private _services;
    private constructor();
    private static _instance;
    static get instance(): ServiceLoader;
    static get<T extends ServiceBase>(serviceName: string): T;
    static set<T extends ServiceBase>(serviceName: string, serviceInstance: T): T;
    protected _get(serviceName: string): ServiceBase;
    protected _set<T extends ServiceBase>(serviceName: string, serviceInstance: T): T;
}
