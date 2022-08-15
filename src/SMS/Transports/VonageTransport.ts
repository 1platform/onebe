import Vonage from "@vonage/server-sdk";
import Config from "../../System/Config";
import { getDefaultLogger } from "../../System/Logger";
import ISMSTransport from "./ISMSTransport";

/**
 * Class representing the Vonage Transport handler
 */
export default class VonageTransport implements ISMSTransport {
  /**
   * The Vonage service
   */
  private readonly _vonage: Vonage;
  /**
   * The default phone config
   */
  private readonly _defaultPhone = Config.string("sms.config.phone");

  /**
   * VonageTransport constructor
   */
  public constructor() {
    this._vonage = new Vonage({
      apiKey: Config.string("sms.config.account"),
      apiSecret: Config.string("sms.config.password"),
    });
  }

  /**
   * Method used to send an SMS.
   *
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   */
  public send(to: string, text: string, from?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this._vonage.message.sendSms(from || this._defaultPhone, to, text, {}, (err, responseData) => {
        if (err) {
          getDefaultLogger().error(err);
          return;
        }
        if (responseData.messages[0]["status"] === "0") {
          getDefaultLogger().info("Message sent successfully!");
        } else {
          getDefaultLogger().error(`Message failed with error: ${ responseData.messages[0]["error-text"] }`);
        }
      });
    });
  }
}
