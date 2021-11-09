import ServiceBase from "../Services/ServiceBase";
import Config from "../System/Config";
import ISMSTransport from "./Transports/ISMSTransport";
import TwilioTransport from "./Transports/TwilioTransport";
import VonageTransport from "./Transports/VonageTransport";

export default class SMSService extends ServiceBase implements ISMSTransport {
  private readonly _enableService: boolean;
  private readonly _transport: ISMSTransport;

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

  public send(to: string, text: string, from?: string): Promise<void> {
    if (this._enableService && this._transport) {
      return this._transport.send(to, text, from);
    }
  }
}
