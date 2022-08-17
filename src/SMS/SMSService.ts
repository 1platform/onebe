import ServiceBase from "../Services/ServiceBase";
import Config from "../System/Config";
import ISMSTransport from "./Transports/ISMSTransport";
import TwilioTransport from "./Transports/TwilioTransport";
import VonageTransport from "./Transports/VonageTransport";
import SMSProvider from "./SMSProvider";

/**
 * Class exposing the SMS sending functionality.
 */
export default class SMSService extends ServiceBase implements ISMSTransport {
  /**
   * If the service is enabled or not.
   */
  private readonly _enableService: boolean;
  /**
   * The SMS Transport used by the application.
   */
  private readonly _transport: ISMSTransport;

  /**
   * SMSService Constructor
   */
  public constructor() {
    super();
    this._enableService = Config.boolean("sms.enabled");
    if (this._enableService) {
      switch (Config.string("sms.provider")) {
        case SMSProvider.VONAGE:
          this._transport = new VonageTransport();
          break;
        case SMSProvider.TWILIO:
          this._transport = new TwilioTransport();
          break;
      }
    }
  }

  /**
   * Method used to send SMS messages
   *
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   */
  public send(to: string, text: string, from?: string): Promise<void> {
    if (this._enableService && this._transport) {
      return this._transport.send(to, text, from);
    }
  }
}
