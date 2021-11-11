import ServiceBase from "../../Services/ServiceBase";
import Observable from "./Observable";
import { observer } from "./ObservablePlugin";

/**
 * An abstract class representing an Observer base.
 */
export default abstract class ObserverBase extends ServiceBase {
  /**
   * The observer plugin instance.
   */
  protected _observer: Observable = observer;

  /**
   * The method used to register a new observer.
   */
  public abstract register(): void;
}
