import ServiceBase from "../../Services/ServiceBase";
import Observable from "./Observable";
export default abstract class ObserverBase extends ServiceBase {
    protected _observer: Observable;
    abstract register(): void;
}
