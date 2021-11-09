import IAppInfo from "./IAppInfo";
declare type ApplicationObject = {
    new (...args: any[]): any;
};
export default class App {
    [key: string]: any;
    private _elements;
    private _appInfo;
    get app(): IAppInfo;
    set app(appInfo: IAppInfo);
    use(ElementInstance: ApplicationObject): void;
    hook(fn: (...args: any) => any): void;
}
export {};
