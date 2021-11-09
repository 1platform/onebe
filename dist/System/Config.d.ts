import IConfig from "./IConfig";
declare class Configuration {
    private _config;
    constructor();
    clear(): void;
    init(configFolder?: string): void;
    load(configStore: IConfig): void;
    get(key: string, defaultValue?: any): string;
    all(): IConfig;
    string(key: string, defaultValue?: string): string;
    number(key: string, defaultValue?: number): number;
    boolean(key: string): boolean;
}
declare const Config: Configuration;
export default Config;
