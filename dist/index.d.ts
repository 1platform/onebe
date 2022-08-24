import { IInitStrategyOptions } from "./Authentication/Passport";
import { IInitOptions } from "./custom";
/**
 * Framework initialisation function. It initializes some elements of the framework
 * to be later used when starting the application up.
 *
 * @param props The various properties you can pass to the init function.
 */
export default function init(props: IInitOptions): Promise<(strategyProps?: IInitStrategyOptions) => Promise<void>>;
