import twilio from "twilio";
import { Config, getDefaultLogger } from "../../System";
import ISMSTransport from "./ISMSTransport";

/**
 * SMS Transport using the Twilio engine.
 */
export default class TwilioTransport implements ISMSTransport {
  /**
   * Twilio service handler.
   */
  private readonly _twilio: twilio.Twilio;
  /**
   * The default phone configuration.
   */
  private readonly _defaultPhone = Config.string("sms.config.phone");

  /**
   * TwilioTransport constructor
   */
  public constructor() {
    this._twilio = twilio(Config.string("sms.config.account"), Config.string("sms.config.password"));
  }

  /**
   * Method used to send an SMS.
   *
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   */
  public async send(to: string, text: string, from?: string): Promise<void> {
    try {
      const response = await this._twilio.messages.create({
        body: text,
        from: from || this._defaultPhone,
        to,
      });

      getDefaultLogger().debug(response.sid);
      getDefaultLogger().info("Message sent successfully!");
    } catch (err) {
      getDefaultLogger().error(err);
      getDefaultLogger().debug(err.stack);
    }
  }
}
