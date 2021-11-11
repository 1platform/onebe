import ServiceBase from "../Services/ServiceBase";
import Config from "../System/Config";
import IEmailTransport, { IEmailOptions } from "./Transports/IEmailTransport";
import SMTPTransport from "./Transports/SMTPTransport";
import TestTransport from "./Transports/TestTransport";

/***
 * Class representing the Email Service
 * @class
 * @extends ServiceBase
 * @implements IEmailTransport
 */

export default class EmailService
  extends ServiceBase
  implements IEmailTransport
{
  /***
   * @property
   * @type boolean
   * @private
   */
  private readonly _enableService: boolean;
  /***
   * @property
   * @type IEmailTransport
   * @private
   */
  private readonly _transport: IEmailTransport;

  /***
   * @constructor
   */
  public constructor() {
    super();

    this._enableService = Config.boolean("email.enabled");
    if (this._enableService) {
      switch (Config.string("email.transport")) {
        case "smtp":
          this._transport = new SMTPTransport();
          break;
        case "test":
          this._transport = new TestTransport();
          break;
      }
    }
  }

  /**
   * Send method
   * @param options The IEmailOptions to be used
   */
  public send(options: IEmailOptions): Promise<void> {
    if (this._enableService && this._transport) {
      return this._transport.send(options);
    }
  }
}
