import Vonage from "@vonage/server-sdk";
import Config from "../../System/Config";
import DefaultLogger from "../../System/Logger";
import ISMSTransport from "./ISMSTransport";

/**
 * Class representing the Vonage Transport handler
 * @class
 * @implements ISMSTransport
 */

export default class VonageTransport implements ISMSTransport {
  /**
   * The Vonage service
   * @property
   * @type Vonage
   * @private
   */
  private readonly _vonage: Vonage;
  /**
   * The default phone config
   * @property
   * @type string
   * @private
   */
  private readonly _defaultPhone = Config.string("sms.config.phone");

  /**
   * @constructor
   */
  public constructor() {
    this._vonage = new Vonage({
      apiKey: Config.string("sms.config.account"),
      apiSecret: Config.string("sms.config.password"),
    });
  }

  /**
   * The send method
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   * @public
   */
  public send(to: string, text: string, from?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this._vonage.message.sendSms(
        from || this._defaultPhone,
        to,
        text,
        {},
        (err, responseData) => {
          if (err) {
            DefaultLogger.error(err);
            return;
          }
          if (responseData.messages[0]["status"] === "0") {
            DefaultLogger.info("Message sent successfully!");
          } else {
            DefaultLogger.error(
              `Message failed with error: ${ responseData.messages[0]["error-text"] }`
            );
          }
        }
      );
    });
  }
}
