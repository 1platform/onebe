import twilio, { Twilio } from "twilio";
import Config from "../../System/Config";
import DefaultLogger from "../../System/Logger";
import ISMSTransport from "./ISMSTransport";

/**
 * Class representing the Twilio Transport handler
 */
export default class TwilioTransport implements ISMSTransport {
  /**
   * The Twilio service
   * @property
   * @type Twilio
   * @private
   */
  private readonly _twilio: twilio.Twilio;
  /**
   * THe default phone config
   * @property
   * @type string
   * @private
   */
  private readonly _defaultPhone = Config.string("sms.config.phone");

  /**
   * @constructor
   */
  public constructor() {
    this._twilio = twilio(
      Config.string("sms.config.account"),
      Config.string("sms.config.password")
    );
  }

  /**
   * The send method
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   * @public
   */
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
