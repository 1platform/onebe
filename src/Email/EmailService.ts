import ServiceBase from "../Services/ServiceBase";
import Config from "../System/Config";
import IEmailTransport, { IEmailOptions } from "./Transports/IEmailTransport";
import SMTPTransport from "./Transports/SMTPTransport";
import TestTransport from "./Transports/TestTransport";
import EmailTransport from "./EmailTransport";

/**
 * Service used to handle Email communications from the application.
 */
export default class EmailService extends ServiceBase implements IEmailTransport {
  /**
   * Flag used to enable or disable the Email Service.
   */
  private readonly _enableService: boolean;
  /**
   * The transport used for handling the emailing part.
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
        case EmailTransport.SMTP:
          this._transport = new SMTPTransport();
          break;
        case EmailTransport.TEST:
          this._transport = new TestTransport();
          break;
      }
    }
  }

  /**
   * Method used to send emails.
   *
   * @param options The parameters you have to use when sending an email.
   */
  public send(options: IEmailOptions): Promise<void> {
    if (this._enableService && this._transport) {
      return this._transport.send(options);
    }
  }
}
