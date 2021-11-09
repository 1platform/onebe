import twilio from "twilio";
import Config from "../../System/Config";
import DefaultLogger from "../../System/Logger";
import ISMSTransport from "./ISMSTransport";

export default class TwilioTransport implements ISMSTransport {
  private readonly _twilio: twilio.Twilio;
  private readonly _defaultPhone = Config.string("sms.config.phone");

  public constructor() {
    this._twilio = twilio(
      Config.string("sms.config.account"),
      Config.string("sms.config.password")
    );
  }

  public async send(to: string, text: string, from?: string): Promise<void> {
    try {
      const response = await this._twilio.messages.create({
        body: text,
        from: from || this._defaultPhone,
        to,
      });

      DefaultLogger.debug(response.sid);
      DefaultLogger.info("Message sent successfully!");
    } catch (err) {
      DefaultLogger.error(err);
      DefaultLogger.debug(err.stack);
    }
  }
}
