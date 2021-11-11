import ServiceBase from "../Services/ServiceBase";
import Config from "../System/Config";
import ISMSTransport from "./Transports/ISMSTransport";
import TwilioTransport from "./Transports/TwilioTransport";
import VonageTransport from "./Transports/VonageTransport";

/**
 * Class representing the SMS Service
 */
export default class SMSService extends ServiceBase implements ISMSTransport {
  /**
   * If the service is enabled or not
   */
  private readonly _enableService: boolean;
  /**
   * @todo
   */
  private readonly _transport: ISMSTransport;

  /**
   * @constructor
   */
  public constructor() {
    super();
    this._enableService = Config.boolean("sms.enabled");
    if (this._enableService) {
      switch (Config.string("sms.provider")) {
        case "vonage":
          this._transport = new VonageTransport();
          break;
        case "twilio":
          this._transport = new TwilioTransport();
          break;
      }
    }
  }

  /**
   * The send method
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
