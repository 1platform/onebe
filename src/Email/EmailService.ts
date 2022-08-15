import ServiceBase from "../Services/ServiceBase";
import Config from "../System/Config";
import IEmailTransport, { IEmailOptions } from "./Transports/IEmailTransport";
import SMTPTransport from "./Transports/SMTPTransport";
import TestTransport from "./Transports/TestTransport";

/**
 * Class exposing the Email sending functionality.
 */
export default class EmailService extends ServiceBase implements IEmailTransport {
  /**
   * Is the service enabled?
   */
  private readonly _enableService: boolean;
  /**
   * The used email transport.
   */
  private readonly _transport: IEmailTransport;

  /**
   * Email Service constructor.
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
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */
  public send(options: IEmailOptions): Promise<void> {
    if (this._enableService && this._transport) {
      return this._transport.send(options);
    }
  }
}
