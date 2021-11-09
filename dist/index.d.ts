import { IInitStrategyOptions } from "./Authentication/Passport";
import "./custom";
interface IOneBEOptions extends IInitStrategyOptions {
    currentDir?: string;
    configDir?: string;
    controllersDir?: string;
}
export default function init(props: IOneBEOptions): Promise<any>;
export {};
