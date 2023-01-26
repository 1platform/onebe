import twilio from "twilio";
import Twilio from "twilio/dist/lib/rest/Twilio";
import Config from "@/System/Config";
import { getDefaultLogger } from "@/System/Logger";
import ISMSTransport from "@/SMS/Transports/ISMSTransport";
import { getTwilioClient } from "@/SMS/getMessagingClient";

/**
 * SMS Transport using the Twilio engine.
 */
export default class TwilioTransport implements ISMSTransport {
  /**
   * Twilio service handler.
   */
  private readonly _twilio: Twilio;
  /**
   * The default phone configuration.
   */
  private readonly _defaultPhone = Config.string("sms.config.phone");

  /**
   * TwilioTransport constructor
   */
  public constructor() {
    this._twilio = getTwilioClient({
      account: Config.string("sms.config.account"),
      password: Config.string("sms.config.password"),
    });
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
