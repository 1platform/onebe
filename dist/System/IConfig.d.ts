export default interface IConfig {
    [key: string]: string | number | boolean | IConfig | null | Array<string> | Array<IConfig>;
}
