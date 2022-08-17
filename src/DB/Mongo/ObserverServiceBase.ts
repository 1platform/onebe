import ServiceBase from "../../Services/ServiceBase";
import Observable from "./Observable";
import { observer } from "./ObservablePlugin";

/**
 * A base abstract class used to define Services that use Mongoose models
 * and require observers in order to perform various tasks.
 */
export default abstract class ObserverServiceBase extends ServiceBase {
  /**
   * The default instance of the Observable plugin that can be used
   * to attach observers to a given model.
   */
  protected _observer: Observable = observer;

  /**
   * The method used to register observers for the models handled by
   * the services defined in this class.
   */
  public abstract register(): void;
}
