import ServiceBase from "../../Services/ServiceBase";
import Observable from "./Observable";
import { observer } from "./ObservablePlugin";

/**
 * An abstract class representing an Observer base
 * @class
 */

export default abstract class ObserverBase extends ServiceBase {
  protected _observer: Observable = observer;


  public abstract register(): void;
}
