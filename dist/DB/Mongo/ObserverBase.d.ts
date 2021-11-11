import ServiceBase from "../../Services/ServiceBase";
import Observable from "./Observable";
/**
 * An abstract class representing an Observer base
 * @class
 */
export default abstract class ObserverBase extends ServiceBase {
    protected _observer: Observable;
    abstract register(): void;
}
