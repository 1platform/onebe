import ServiceBase from "../../Services/ServiceBase";
import Observable from "./Observable";
/**
 * An abstract class representing an Observer base.
 */
export default abstract class ObserverBase extends ServiceBase {
    /**
     * The observer plugin instance.
     */
    protected _observer: Observable;
    /**
     * The method used to register a new observer.
     */
    abstract register(): void;
}
